import { Injectable } from "@nestjs/common";
import { create } from "domain";
import { StationMonitor } from "src/domain";
import { StationMonitorModel } from "./StationMonitorModel";

@Injectable()
export class StationMonitorMapper {
    fromStationMonitorModel(model: StationMonitorModel): StationMonitor {
        const { 
            id,
            date,
            pmsParkId,
            stationId,
            typePassage,
            passages,
            canceled,
            minPassageTime,
            maxPassageTime,
            avgPassageTime,
            createdAt,
            updatedAt
        } = model

        return new StationMonitor(
            date,
            pmsParkId,
            stationId,
            typePassage,
            passages,
            canceled,
            minPassageTime,
            maxPassageTime,
            avgPassageTime,
            id,
            createdAt,
            updatedAt
        )
    }

    fromStationMonitorEntity(entity: StationMonitor): Promise<StationMonitorModel> {
        const { 
            date,
            pmsParkId,
            stationId,
            typePassage,
            passages,
            canceled,
            minPassageTime,
            maxPassageTime,
            avgPassageTime
        } = entity

        return StationMonitorModel.create({
            date,
            pmsParkId,
            stationId,
            typePassage,
            passages,
            canceled,
            minPassageTime,
            maxPassageTime,
            avgPassageTime
        })
    }
}