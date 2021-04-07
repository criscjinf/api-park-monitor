import { Injectable } from "@nestjs/common";
import { create } from "domain";
import { ParkMonitor } from "src/domain";
import { ParkMonitorModel } from "./ParkMonitorModel";

@Injectable()
export class ParkMonitorMapper {
    fromParkMonitorModel(model: ParkMonitorModel): ParkMonitor {
        const { 
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
            id,
            createdAt,
            updatedAt
         } = model;

        return new ParkMonitor(date, pmsParkId, inputs, outputs, canceled,
            access, minInputTime, maxInputTime, avgInputTime, minOutputTime, 
            maxOutputTime, avgOutputTime, minAmountDue, maxAmountDue, 
            avgAmountDue, id, createdAt, updatedAt);
    }

    fromParkMonitorEntity(entity: ParkMonitor): Promise<ParkMonitorModel> {
        const { date,
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
            avgAmountDue
         } = entity;

        return ParkMonitorModel.create({
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
            avgAmountDue
        })
    }
}