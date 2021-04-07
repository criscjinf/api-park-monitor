import { Inject, Injectable } from "@nestjs/common";
import { IParkMonitorRepository, ParkMonitor } from "src/domain";
@Injectable()
export class GetParkMonitor {
    constructor(@Inject('ParkMonitorRepo') private parkMonitorRepository: IParkMonitorRepository) {};

    async invoke(pmsParkId: string, date: string): Promise<ParkMonitor> {
        return await this.parkMonitorRepository.findOneByPmsParkIdAndDate(pmsParkId, date);
    }
}