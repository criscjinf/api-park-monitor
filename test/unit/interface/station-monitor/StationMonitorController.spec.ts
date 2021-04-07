import { CreateStationMonitor, DeleteStationMonitor, GetStationMonitor, ListStationMonitor } from "src/application";
import { StationMonitor } from "src/domain";
import { StationMonitorController } from "src/Interface";
import factory from "test/factory";

describe('interface/StationMonitorController', () => {
    let createStationMonitor;
    let deleteStationMonitor;
    let listStationMonitor;
    let getStationMonitor;
    let stubs;
    let stationMonitorController;
    let stationMonitorEntity = factory.newStationMonitor()
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
     } = stationMonitorEntity;

    beforeEach(() => {
        stubs = {
            createStationMonitor: jest.fn<Promise<CreateStationMonitor>, any>(),
            deleteStationMonitor: jest.fn<Promise<DeleteStationMonitor>, any>(),
            listStationMonitor: jest.fn<Promise<ListStationMonitor>, any>(),
            getStationMonitor: jest.fn<Promise<GetStationMonitor>, any>()
        };

        createStationMonitor = {
            invoke: stubs.createStationMonitor
        };

        deleteStationMonitor = {
            invoke: stubs.deleteStationMonitor
        };

        listStationMonitor = {
            invoke: stubs.listStationMonitor
        };

        getStationMonitor = {
            invoke: stubs.getStationMonitor
        };

        stationMonitorController = new StationMonitorController(createStationMonitor, deleteStationMonitor, listStationMonitor, getStationMonitor);
    });

    test('should instance of StationMonitorController successfully', () => {
        const controller = new StationMonitorController(stubs.createStationMonitor, stubs.deleteStationMonitor, stubs.listStationMonitor, stubs.getStationMonitor);
        expect(controller).toBeInstanceOf(StationMonitorController);
    });

    test('should access listAllStationMonitors method successfully', async () => {
        stubs.listStationMonitor.mockResolvedValue([stationMonitorEntity]);
        let result = await stationMonitorController.listAllStationMonitors(pmsParkId, stationId, date, typePassage);

        expect(listStationMonitor.invoke).toBeCalledTimes(1);
        expect(result).toEqual([stationMonitorEntity]);
    });

    test('should access getStationMonitorByStationIdAndDate method successfully', async () => {
        stubs.getStationMonitor.mockResolvedValue(stationMonitorEntity);
        let result = await stationMonitorController.getStationMonitorByStationIdAndDateAndTypePassage(stationId, date, typePassage);

        expect(getStationMonitor.invoke).toBeCalledTimes(1);
        expect(result).toBeInstanceOf(StationMonitor);
    });

    test('should access removeStationMonitor method successfully', async () => {
        stubs.deleteStationMonitor.mockResolvedValue(null);
        await stationMonitorController.removeStationMonitor(stationId, date, typePassage);

        expect(deleteStationMonitor.invoke).toBeCalledTimes(1);
    });

    test('should access newStationMonitor method successfully', async () => {
        stubs.createStationMonitor.mockResolvedValue(stationMonitorEntity);
        
        await stationMonitorController.newStationMonitor({ 
            date,
            pmsParkId,
            stationId,
            typePassage,
            passages,
            canceled,
            minPassageTime,
            maxPassageTime,
            avgPassageTime
         });

        expect(createStationMonitor.invoke).toBeCalledTimes(1);
    });
});