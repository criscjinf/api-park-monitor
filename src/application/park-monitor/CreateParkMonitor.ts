import { Inject, Injectable } from "@nestjs/common";
import { BusinessError } from "src/domain/Errors";
import { IParkMonitorRepository } from "../../domain/IParkMonitorRepository";
import { ParkMonitor } from "../../domain/ParkMonitor";

@Injectable()
export class CreateParkMonitor {
    constructor(@Inject('ParkMonitorRepo') private parkMonitorRepository: IParkMonitorRepository) {}

    async invoke(
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
        avgAmountDue,
    ) {
        const parkMonitor = new ParkMonitor(date, pmsParkId, inputs, outputs,
            canceled, access, minInputTime, maxInputTime, avgInputTime, minOutputTime,
            maxOutputTime, avgOutputTime, minAmountDue, maxAmountDue, avgAmountDue)
        
        await this.checkIfPmsParkIdToDateIsAlreadyRegistered(pmsParkId, date)

        return this.parkMonitorRepository.insert(parkMonitor)
    }

    private async checkIfPmsParkIdToDateIsAlreadyRegistered(pmsParkId: string, date: string) {
        const parkMonitor = await this.parkMonitorRepository.findOneByPmsParkIdAndDate(pmsParkId, date)
        if (parkMonitor !== null) {
            throw new BusinessError(`[CreateParkMonitor] pmsParkId ${pmsParkId} already register the ${date} monitoring`)
        }
    }

}