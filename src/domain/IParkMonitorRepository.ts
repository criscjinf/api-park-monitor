import { ParkMonitor } from "./ParkMonitor";

export interface IParkMonitorRepository {
    insert(parkMonitor: ParkMonitor): Promise<ParkMonitor>;
    findOneByPmsParkIdAndDate(pmsParkID: string, date: string): Promise<ParkMonitor>;
    removeOneByPmsParkIdAndDate(pmsParkId: string, date: string): Promise<any>;
    findAllByPmsParkIdOrDate(pmsParkId: string, date: string): Promise<ParkMonitor[]>;
}