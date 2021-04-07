import { ParkMonitor } from "src/domain";
import { ParkMonitorMapper, ParkMonitorModel, ParkMonitorRepository } from "src/infrastructure";
import factory from "test/factory";

describe('infrastructure/ParkMonitorRepository', () => {
    let parkMonitorMapper;
    let parkMonitorRepo: ParkMonitorRepository;
    let parkMonitorEntity: ParkMonitor;
    let stubs;

    beforeEach(() => {
        parkMonitorEntity = factory.newParkMonitor();
        
        ParkMonitorModel.findOne = jest.fn(() => { return parkMonitorEntity })
        ParkMonitorModel.findAll = jest.fn(() => { return [parkMonitorEntity] })
        ParkMonitorModel.destroy = jest.fn(() => { return 'Entidade deletada' })
        stubs = {
            fromParkMonitorModel: jest.fn<Promise<ParkMonitorMapper>, any>(),
            fromParkMonitorEntity: jest.fn<Promise<ParkMonitorMapper>, any>()
        }

        parkMonitorMapper = {
            fromParkMonitorModel: stubs.fromParkMonitorModel,
            fromParkMonitorEntity: stubs.fromParkMonitorEntity
        }
    })

    test('Should instance a ParkMonitorRepository successfully', () => {
        const endpoint = new ParkMonitorRepository(parkMonitorMapper);
        expect(endpoint).toBeInstanceOf(ParkMonitorRepository);
    });

    test('Should get a ParkMonitor by pmsParkId and date with success', async () => {
        const {
            date,
            pmsParkId,
            inputs
        } =  parkMonitorEntity;

        parkMonitorRepo = new ParkMonitorRepository(parkMonitorMapper);
        stubs.fromParkMonitorModel.mockResolvedValue(parkMonitorEntity);
        const parkMonitor = await parkMonitorRepo.findOneByPmsParkIdAndDate(pmsParkId.toString(), date.toString());

        expect(parkMonitor.pmsParkId).toEqual(pmsParkId);
        expect(parkMonitor.date).toEqual(date);
        expect(parkMonitor.inputs).toEqual(inputs);
    });

    test('Should return null if not found a model by pmsParkId and date with success', async () => {
        ParkMonitorModel.findOne = jest.fn(() => { return null })
        parkMonitorRepo = new ParkMonitorRepository(parkMonitorMapper);
        const parkMonitor = await parkMonitorRepo.findOneByPmsParkIdAndDate('165', '2020-01-01');

        expect(parkMonitor).toBeNull();
    });

    test('Should get all ParkMonitor by pmsParkId and Date entities with success', async () => {
        const {
            date,
            pmsParkId,
            inputs
        } =  parkMonitorEntity;
        parkMonitorRepo = new ParkMonitorRepository(parkMonitorMapper);
        stubs.fromParkMonitorModel.mockResolvedValue(parkMonitorEntity);

        const parkMonitor = await parkMonitorRepo.findAllByPmsParkIdOrDate(pmsParkId.toString(), date.toString());
        parkMonitor.map(async (ctxParkMonitorPromise) => {
            let ctxParkMonitorEntity = await ctxParkMonitorPromise;
            expect(ctxParkMonitorEntity).toBeInstanceOf(ParkMonitor);
            expect(ctxParkMonitorEntity.pmsParkId).toEqual(pmsParkId);
            expect(ctxParkMonitorEntity.date).toEqual(date);
            expect(ctxParkMonitorEntity.inputs).toEqual(inputs);
        });
    });

    test('Should insert a ParkMonitor entity with success', async () => {
        parkMonitorRepo = new ParkMonitorRepository(parkMonitorMapper);
        stubs.fromParkMonitorEntity.mockResolvedValue(parkMonitorEntity);

        const parkMonitor = await parkMonitorRepo.insert(parkMonitorEntity);
        expect(parkMonitor.pmsParkId).toEqual(parkMonitorEntity.pmsParkId);
        expect(parkMonitor.date).toEqual(parkMonitorEntity.date);
        expect(parkMonitor.inputs).toEqual(parkMonitorEntity.inputs);
        expect(parkMonitor).toBeInstanceOf(ParkMonitor);
    });

    test('Should delete a ParkMonitor entity with success', async () => {
        const {
            pmsParkId,
            date
        } = parkMonitorEntity;

        parkMonitorRepo = new ParkMonitorRepository(parkMonitorMapper);

        const parkMonitor = await parkMonitorRepo.removeOneByPmsParkIdAndDate(pmsParkId.toString(), date.toString());
        expect('Entidade deletada').toEqual(expect.stringMatching(parkMonitor));
    });
})