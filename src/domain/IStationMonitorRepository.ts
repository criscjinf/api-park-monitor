import { StationMonitor } from "./StationMonitor";

export interface IStationMonitorRepository {
    insert(stationMonitor: StationMonitor): Promise<StationMonitor>;
    findOneByStationIdAndDateAndTypePassage(stationId: string, date: string, typePassage: string): Promise<StationMonitor>;
    removeOneByStationIdAndDateAndTypePassage(stationId: string, date: string, typePassage: string): Promise<any>
    findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage(pmsParkId: string, stationId: string, date: string, typePassage: string): Promise<StationMonitor[]>
}