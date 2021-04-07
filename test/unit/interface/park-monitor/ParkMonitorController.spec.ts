import { CreateParkMonitor, DeleteParkMonitor, GetParkMonitor, ListParkMonitor } from "src/application";
import { ParkMonitor } from "src/domain";
import { ParkMonitorController } from "src/Interface";
import factory from "test/factory";

describe('interface/ParkMonitorController', () => {
    let createParkMonitor;
    let deleteParkMonitor;
    let listParkMonitor;
    let getParkMonitor;
    let stubs;
    let parkMonitorController;
    let parkMonitorEntity = factory.newParkMonitor()
    const {
        date,
        pmsParkId,
        inputs,
        outputs,
        canceled,
        access,
        minInputTime,
        maxInputTime,
        avgInputTime,
        minOutputTime,
        maxOutputTime,
        avgOutputTime,
        minAmountDue,
        maxAmountDue,
        avgAmountDue
    } = parkMonitorEntity;

    beforeEach(() => {
        stubs = {
            createParkMonitor: jest.fn<Promise<CreateParkMonitor>, any>(),
            deleteParkMonitor: jest.fn<Promise<DeleteParkMonitor>, any>(),
            listParkMonitor: jest.fn<Promise<ListParkMonitor>, any>(),
            getParkMonitor: jest.fn<Promise<GetParkMonitor>, any>()
        };

        createParkMonitor = {
            invoke: stubs.createParkMonitor
        };

        deleteParkMonitor = {
            invoke: stubs.deleteParkMonitor
        };

        listParkMonitor = {
            invoke: stubs.listParkMonitor
        };

        getParkMonitor = {
            invoke: stubs.getParkMonitor
        };

        parkMonitorController = new ParkMonitorController(createParkMonitor, deleteParkMonitor, listParkMonitor, getParkMonitor);
    });

    test('should instance of ParkMonitorController successfully', () => {
        const controller = new ParkMonitorController(stubs.createParkMonitor, stubs.deleteParkMonitor, stubs.listParkMonitor, stubs.getParkMonitor);
        expect(controller).toBeInstanceOf(ParkMonitorController);
    });

    test('should access listAllParkMonitors method successfully', async () => {
        stubs.listParkMonitor.mockResolvedValue([parkMonitorEntity]);
        let result = await parkMonitorController.listAllParkMonitors(pmsParkId, date);

        expect(listParkMonitor.invoke).toBeCalledTimes(1);
        expect(result).toEqual([parkMonitorEntity]);
    });

    test('should access getParkMonitorByPmsParkIdAndDate method successfully', async () => {
        stubs.getParkMonitor.mockResolvedValue(parkMonitorEntity);
        let result = await parkMonitorController.getParkMonitorByPmsParkIdAndDate(pmsParkId, date);

        expect(getParkMonitor.invoke).toBeCalledTimes(1);
        expect(result).toBeInstanceOf(ParkMonitor);
    });

    test('should access removeParkMonitor method successfully', async () => {
        stubs.deleteParkMonitor.mockResolvedValue(null);
        await parkMonitorController.removeParkMonitor(pmsParkId, date);

        expect(deleteParkMonitor.invoke).toBeCalledTimes(1);
    });

    test('should access newParkMonitor method successfully', async () => {
        stubs.createParkMonitor.mockResolvedValue(parkMonitorEntity);
        
        await parkMonitorController.newParkMonitor({
            date,
            pmsParkId,
            inputs,
            outputs,
            canceled,
            access,
            minInputTime,
            maxInputTime,
            avgInputTime,
            minOutputTime,
            maxOutputTime,
            avgOutputTime,
            minAmountDue,
            maxAmountDue,
            avgAmountDue
        });

        expect(createParkMonitor.invoke).toBeCalledTimes(1);
    });
});