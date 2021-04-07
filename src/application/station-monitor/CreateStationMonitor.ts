import { Inject, Injectable } from "@nestjs/common";
import { BusinessError } from "src/domain/Errors";
import { IStationMonitorRepository } from "src/domain/IStationMonitorRepository";
import { StationMonitor } from "src/domain/StationMonitor";

@Injectable()
export class CreateStationMonitor {

    constructor(@Inject('StationMonitorRepo') private stationMonitorRepository: IStationMonitorRepository) {}

    async invoke(
        date,
        pmsParkId,
        stationId,
        typePassage,
        passages,
        canceled,
        minPassageTime,
        maxPassageTime,
        avgPassageTime
    ) {
        const stationMonitor = new StationMonitor( date, pmsParkId, stationId, typePassage,
            passages, canceled, minPassageTime, maxPassageTime, avgPassageTime)
        await this.checkIfStationIdToDateIsAlreadyRegistered(stationId, date, typePassage)

        return this.stationMonitorRepository.insert(stationMonitor)
    }

    private async checkIfStationIdToDateIsAlreadyRegistered(stationId: string, date: string, typePassage: string) {
        const stationMonitor = await this.stationMonitorRepository.findOneByStationIdAndDateAndTypePassage(stationId, date, typePassage)
        if (stationMonitor !== null) {
            throw new BusinessError(`[CreateStationMonitor] Station ID ${stationId} already record for the monitoring date ${date} and type of passage ${typePassage}`)
        }
    }

}