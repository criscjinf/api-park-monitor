import { Injectable } from "@nestjs/common";
import { IParkMonitorRepository, ParkMonitor } from "src/domain";
import { Filter } from "../IFilters";
import { ParkMonitorMapper } from "./ParkMonitorMapper";
import { ParkMonitorModel } from "./ParkMonitorModel";

@Injectable()
export class ParkMonitorRepository implements IParkMonitorRepository {
    constructor(private readonly parkMonitorMapper: ParkMonitorMapper) {}

    async findOneByPmsParkIdAndDate(pmsParkId: string, date: string) {
        const model = await ParkMonitorModel.findOne({ where: { pmsParkId, date }});
        if (model === null) {
            return null
        }
        return this.parkMonitorMapper.fromParkMonitorModel(model);
    }

    async findAllByPmsParkIdOrDate(pmsParkId: string, date: string) {
        const where: Filter = {};

        if (pmsParkId) {
            where.pmsParkId = pmsParkId;
        };

        if (date) {
            where.date = date;
        };

        const models = await ParkMonitorModel.findAll({ where });
        return models.map(model => this.parkMonitorMapper.fromParkMonitorModel(model));
    }

    async insert(parkMonitor: ParkMonitor) {
        const model = await this.parkMonitorMapper.fromParkMonitorEntity(parkMonitor);
        parkMonitor.id = model.id;
        parkMonitor.createdAt = model.createdAt;
        parkMonitor.updatedAt = model.updatedAt;
        return parkMonitor;
    }

    async removeOneByPmsParkIdAndDate(pmsParkId: string, date: string) {
        return await ParkMonitorModel.destroy({
            where: { pmsParkId, date }
        });
    }
}