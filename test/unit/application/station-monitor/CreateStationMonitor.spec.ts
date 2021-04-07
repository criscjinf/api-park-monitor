import { CreateStationMonitor } from "src/application";
import { IStationMonitorRepository, StationMonitor } from "src/domain"
import factory from "test/factory";

const stubs = factory.getStationMonitorStubs();
const fakeRepository = factory.getStationMonitorFakeRepo(stubs);
const createStationMonitor = new CreateStationMonitor(fakeRepository)
const stationMonitorMock = factory.newStationMonitor();

const { 
    date,
    pmsParkId,
    stationId,
    typePassage,
    passages,
    canceled,
    minPassageTime,
    maxPassageTime,
    avgPassageTime
 } = stationMonitorMock


describe('application/CreateStationMonitor', () => {
    afterAll(() => jest.resetAllMocks())

    it('Should instantiate and save a StationMonitor entity', async () => {
        stubs.insert.mockResolvedValue(stationMonitorMock);

        stubs.findOneByStationIdAndDateAndTypePassage.mockResolvedValue(null)
        const result = await createStationMonitor.invoke(date, pmsParkId, stationId, typePassage,
            passages, canceled, minPassageTime, maxPassageTime, avgPassageTime);

        expect(result).toEqual(stationMonitorMock)
        expect(fakeRepository.insert).toHaveBeenCalledWith(new StationMonitor(date, pmsParkId, stationId, typePassage,
            passages, canceled, minPassageTime, maxPassageTime, avgPassageTime))
        
    })

    it('Should fail to save the same StationMonitor twice', async () => {
        fakeRepository.insert = stubs.insert;
        stubs.findOneByStationIdAndDateAndTypePassage.mockResolvedValue(stationMonitorMock);
        try{
            const result = await createStationMonitor.invoke(date, pmsParkId, stationId, typePassage,
                passages, canceled, minPassageTime, maxPassageTime, avgPassageTime);
            expect(result).toEqual(null);
        } catch (error) {
            expect(fakeRepository.insert).toBeCalledTimes(0);
            expect(error.message).toEqual(`[CreateStationMonitor] Station ID ${stationId} already record for the monitoring date ${date} and type of passage ${typePassage}`);
        }

    })

})