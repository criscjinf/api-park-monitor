import { Inject, Injectable } from "@nestjs/common";
import { IStationMonitorRepository } from "src/domain";

@Injectable()
export class DeleteStationMonitor {
    constructor(@Inject('StationMonitorRepo') private stationMonitorRepository: IStationMonitorRepository){ }
    invoke(stationId: string, date: string, typePassage: string): Promise<void> {
        return this.stationMonitorRepository.removeOneByStationIdAndDateAndTypePassage(stationId, date, typePassage)
    }
}