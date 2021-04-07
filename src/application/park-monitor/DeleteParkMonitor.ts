import { Inject, Injectable } from "@nestjs/common";
import { IParkMonitorRepository } from "src/domain";

@Injectable()
export class DeleteParkMonitor {
    constructor(@Inject('ParkMonitorRepo') private parkMonitorRepository: IParkMonitorRepository) {}

    invoke(pmsParkId: string, date: string): Promise<void> {
        return this.parkMonitorRepository.removeOneByPmsParkIdAndDate(pmsParkId, date);
    }
}