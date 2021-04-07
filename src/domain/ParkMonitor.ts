import { runInThisContext } from "vm";

export class ParkMonitor {
    public id: number;
    public date: Date;
    public pmsParkId: number;
    public inputs: number;
    public outputs: number;
    public canceled: number;
    public access: number;
    public minInputTime: number;
    public maxInputTime: number;
    public avgInputTime: number;
    public minOutputTime: number;
    public maxOutputTime: number;
    public avgOutputTime: number;
    public minAmountDue: number;
    public maxAmountDue: number;
    public avgAmountDue: number;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(
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
        id?,
        createdAt?,
        updatedAt?,
    ) {
        this.date = new Date(date);
        this.pmsParkId = pmsParkId;
        this.inputs = inputs;
        this.outputs = outputs;
        this.canceled = canceled;
        this.access = access;
        this.minInputTime = minInputTime;
        this.maxInputTime = maxInputTime;
        this.avgInputTime = avgInputTime;
        this.minOutputTime = minOutputTime;
        this.maxOutputTime = maxOutputTime;
        this.avgOutputTime = avgOutputTime;
        this.minAmountDue = minAmountDue;
        this.maxAmountDue = maxAmountDue;
        this.avgAmountDue = avgAmountDue;
        this.id = id;
        this.createdAt = createdAt ? new Date(createdAt) : null;
        this.updatedAt = updatedAt ? new Date(updatedAt) : null;
    }
}