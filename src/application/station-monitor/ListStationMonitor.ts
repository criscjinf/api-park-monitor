import { Inject, Injectable } from "@nestjs/common";
import { IStationMonitorRepository } from "src/domain";

@Injectable()
export class ListStationMonitor {
    constructor(@Inject('StationMonitorRepo') private stationMonitorRepository: IStationMonitorRepository) { }

    async invoke(pmsParkId: string, stationId: string, date: string, typePassage: string) {
        return await this.stationMonitorRepository.findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage(pmsParkId, stationId, date, typePassage)
    }
}