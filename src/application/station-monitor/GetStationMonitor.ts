import { Inject, Injectable } from "@nestjs/common";
import { IStationMonitorRepository, StationMonitor } from "src/domain";

@Injectable()
export class GetStationMonitor {
    constructor(@Inject('StationMonitorRepo') private stationMonitorRepository: IStationMonitorRepository) { }
    async invoke(stationId: string, date: string, typePassage: string): Promise<StationMonitor> {
        return await this.stationMonitorRepository.findOneByStationIdAndDateAndTypePassage(stationId, date, typePassage)
    }
}