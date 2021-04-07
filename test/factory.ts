import { strict } from "assert";
import { IParkMonitorRepository, IStationMonitorRepository, ParkMonitor, StationMonitor } from "src/domain";

class Factory {
    newParkMonitor(): ParkMonitor {
        const id = '1'
        const date = '2020-09-10';
        const pmsParkId = '165';
        const inputs = '35';
        const outputs = '30';
        const canceled = '10';
        const access = '65';
        const minInputTime = '3';
        const maxInputTime = '7';
        const avgInputTime = '4';
        const minOutputTime = '5';
        const maxOutputTime = '9';
        const avgOutputTime = '6';
        const minAmountDue = '5.5';
        const maxAmountDue = '90.87';
        const avgAmountDue = '15.35';
        const createdAt = '2020-09-15T10:11:12'
        const updatedAt = '2020-09-16T01:02:34'
        
        return new ParkMonitor(date, pmsParkId, inputs, outputs,
            canceled, access, minInputTime, maxInputTime, avgInputTime, minOutputTime,
            maxOutputTime, avgOutputTime, minAmountDue, maxAmountDue, avgAmountDue,
            id, createdAt, updatedAt);

    }

    newStationMonitor = (): StationMonitor => {
        const id = '1';
        const date = '2020-09-15';
        const pmsParkId = '123';
        const stationId = '6';
        const typePassage = 'INPUT';
        const passages = '115';
        const canceled = '52';
        const minPassageTime = '2';
        const maxPassageTime = '10';
        const avgPassageTime = '3';
        const createdAt = '2020-09-15T10:11:12';
        const updatedAt = '2020-09-16T01:02:34';

        return new StationMonitor(date, pmsParkId, stationId, typePassage,
            passages, canceled, minPassageTime, maxPassageTime,  avgPassageTime, 
            id, createdAt, updatedAt);
    }

    getStationMonitorStubs() {
        return {
            insert: jest.fn<Promise<StationMonitor>, any>(),
            findOneByStationIdAndDateAndTypePassage: jest.fn<Promise<StationMonitor>, any>(),
            removeOneByStationIdAndDateAndTypePassage: jest.fn<Promise<any>, any>(),
            findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage: jest.fn<Promise<StationMonitor[]>, any>()
        }
    }

    getStationMonitorFakeRepo(stubs: any) {
        return {
            insert: stubs.insert,
            findOneByStationIdAndDateAndTypePassage: stubs.findOneByStationIdAndDateAndTypePassage,
            removeOneByStationIdAndDateAndTypePassage: stubs.removeOneByStationIdAndDateAndTypePassage,
            findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage: stubs.findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage
        } as IStationMonitorRepository;
    }

    getParkMonitorStubs() {
        return {
            insert: jest.fn<Promise<ParkMonitor>, any>(),
            findOneByPmsParkIdAndDate: jest.fn<Promise<ParkMonitor>, any>(),
            removeOneByPmsParkIdAndDate: jest.fn<Promise<any>, any>(),
            findAllByPmsParkIdOrDate: jest.fn<Promise<ParkMonitor[]>, any>()
        };
    }

    getParkMonitorFakeRepo(stubs: any) {
        return {
            insert: stubs.insert,
            findOneByPmsParkIdAndDate: stubs.findOneByPmsParkIdAndDate,
            removeOneByPmsParkIdAndDate: stubs.removeOneByPmsParkIdAndDate,
            findAllByPmsParkIdOrDate:stubs.findAllByPmsParkIdOrDate
        } as IParkMonitorRepository;
    }
}

export default new Factory()