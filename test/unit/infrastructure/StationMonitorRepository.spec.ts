import { type } from "os";
import { StationMonitor } from "src/domain";
import { 
    StationMonitorMapper,
    StationMonitorModel,
    StationMonitorRepository
} from "src/infrastructure";

import factory from "test/factory";

describe('infrastructure/StationMonitorRepository', () => {
    let stationMonitorMapper;
    let stationMonitorRepo: StationMonitorRepository;
    let stationMonitorEntity: StationMonitor;
    let stubs;

    beforeEach(() => {
        stationMonitorEntity = factory.newStationMonitor();

        StationMonitorModel.findOne = jest.fn(() => { return stationMonitorEntity })
        StationMonitorModel.findAll = jest.fn(() => { return [stationMonitorEntity] })
        StationMonitorModel.destroy = jest.fn(() => { return 'Entidade deletada' })

        stubs = {
            fromStationMonitorModel: jest.fn<Promise<StationMonitorMapper>, any>(),
            fromStationMonitorEntity: jest.fn<Promise<StationMonitorMapper>, any>()
        }

        stationMonitorMapper = {
            fromStationMonitorModel: stubs.fromStationMonitorModel,
            fromStationMonitorEntity: stubs.fromStationMonitorEntity
        }
    })

    test('Should instance a StationMonitorRepository successfully', () => {
        const endpoint = new StationMonitorRepository(stationMonitorMapper);
        expect(endpoint).toBeInstanceOf(StationMonitorRepository);
    });

    test('Should get a StationMonitor by stationId and date with success', async () => {
        const {
            date,
            stationId,
            typePassage,
            passages
        } =  stationMonitorEntity;

        stationMonitorRepo = new StationMonitorRepository(stationMonitorMapper);
        stubs.fromStationMonitorModel.mockResolvedValue(stationMonitorEntity);
        const stationMonitor = await stationMonitorRepo.findOneByStationIdAndDateAndTypePassage(stationId.toString(), date.toString(), typePassage);

        expect(stationMonitor.stationId).toEqual(stationId);
        expect(stationMonitor.date).toEqual(date);
        expect(stationMonitor.typePassage).toEqual(typePassage);
        expect(stationMonitor.passages).toEqual(passages);
    });

    test('Should return null if not found a model by stationId and date with success', async () => {
        StationMonitorModel.findOne = jest.fn(() => { return null })
        stationMonitorRepo = new StationMonitorRepository(stationMonitorMapper);
        const stationMonitor = await stationMonitorRepo.findOneByStationIdAndDateAndTypePassage('165', '2020-01-01', 'INPUT');

        expect(stationMonitor).toBeNull();
    });

    test('Should get all StationMonitor by pmsParkId, stationId and Date with success', async () => {
        const {
            date,
            pmsParkId,
            stationId,
            typePassage,
            passages
        } =  stationMonitorEntity;
        stationMonitorRepo = new StationMonitorRepository(stationMonitorMapper);
        stubs.fromStationMonitorModel.mockResolvedValue(stationMonitorEntity);

        const stationMonitor = await stationMonitorRepo.findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage(pmsParkId.toString(), stationId.toString(), date.toString(), typePassage);
        stationMonitor.map(async (ctxStationMonitorPromise) => {
            let ctxStationMonitorEntity = await ctxStationMonitorPromise;
            expect(ctxStationMonitorEntity).toBeInstanceOf(StationMonitor)
            expect(ctxStationMonitorEntity.pmsParkId).toEqual(pmsParkId);
            expect(ctxStationMonitorEntity.stationId).toEqual(stationId);
            expect(ctxStationMonitorEntity.typePassage).toEqual(typePassage);
            expect(ctxStationMonitorEntity.date).toEqual(date);
            expect(ctxStationMonitorEntity.passages).toEqual(passages);
        });
    });

    test('Should insert a StationMonitor entity with success', async () => {
        stationMonitorRepo = new StationMonitorRepository(stationMonitorMapper);
        stubs.fromStationMonitorEntity.mockResolvedValue(stationMonitorEntity);

        const stationMonitor = await stationMonitorRepo.insert(stationMonitorEntity);
        expect(stationMonitor.pmsParkId).toEqual(stationMonitorEntity.pmsParkId);
        expect(stationMonitor.stationId).toEqual(stationMonitorEntity.stationId);
        expect(stationMonitor.date).toEqual(stationMonitorEntity.date);
        expect(stationMonitor.passages).toEqual(stationMonitorEntity.passages);
        expect(stationMonitor).toBeInstanceOf(StationMonitor);
    });

    test('Should delete a StationMonitor entity with success', async () => {
        const {
            stationId,            
            date,
            typePassage
        } = stationMonitorEntity;

        stationMonitorRepo = new StationMonitorRepository(stationMonitorMapper);

        const stationMonitor = await stationMonitorRepo.removeOneByStationIdAndDateAndTypePassage(stationId.toString(), date.toString(), typePassage);
        expect('Entidade deletada').toEqual(expect.stringMatching(stationMonitor));
    });    
})