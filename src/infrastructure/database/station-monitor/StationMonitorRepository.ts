import { Injectable } from "@nestjs/common";
import { IStationMonitorRepository, StationMonitor } from "src/domain";
import { Filter } from "../IFilters";
import { StationMonitorMapper } from "./StationMonitorMapper";
import { StationMonitorModel } from "./StationMonitorModel";

@Injectable()
export class StationMonitorRepository implements IStationMonitorRepository {
    constructor(private readonly stationMonitorMapper: StationMonitorMapper) {}
    async findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage(pmsParkId: string, stationID: string, date: string, typePassage: string) {
        const where: Filter = {};
        if (pmsParkId && !isNaN(parseInt(pmsParkId))) {
            where.pmsParkId = parseInt(pmsParkId);
        }

        if (stationID && !isNaN(parseInt(stationID))) {
            where.stationId = parseInt(stationID);
        };

        if (date) {
            where.date = date;
        };

        if (typePassage) {
            where.typePassage = typePassage
        }

        const models = await StationMonitorModel.findAll({ where });
        return models.map((model: StationMonitorModel) => this.stationMonitorMapper.fromStationMonitorModel(model));
    }

    async findOneByStationIdAndDateAndTypePassage(stationId: string, date: string, typePassage: string) {
        const model = await StationMonitorModel.findOne({ where: { stationId, date, typePassage }})
        if (model === null) {
            return null
        }
        return this.stationMonitorMapper.fromStationMonitorModel(model)
    }

    async insert(stationMonitor: StationMonitor) {
        const model = await this.stationMonitorMapper.fromStationMonitorEntity(stationMonitor);
        stationMonitor.id = model.id;
        stationMonitor.createdAt = model.createdAt;
        stationMonitor.updatedAt = model.updatedAt;
        return stationMonitor;
    }

    async removeOneByStationIdAndDateAndTypePassage(stationId: string, date: string, typePassage: string) {
        return await StationMonitorModel.destroy({
            where: { stationId, date, typePassage }
        })
    }
}