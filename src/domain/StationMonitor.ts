export class StationMonitor {
    public id: number;
    public date: Date;
    public pmsParkId: number;
    public stationId: number;
    public typePassage: string;
    public passages: number;
    public canceled: number;
    public minPassageTime: number;
    public maxPassageTime: number;
    public avgPassageTime: number;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(
        date,
        pmsParkId,
        stationId,
        typePassage,
        passages,
        canceled,
        minPassageTime,
        maxPassageTime,
        avgPassageTime,
        id?,
        createdAt?,
        updatedAt?,
    ) {
        this.date = new Date(date);
        this.pmsParkId = pmsParkId;
        this.stationId = stationId;
        this.typePassage = typePassage;
        this.passages = passages;
        this.canceled = canceled;
        this.minPassageTime = minPassageTime;
        this.maxPassageTime = maxPassageTime;
        this.avgPassageTime = avgPassageTime;
        this.id = id;
        this.createdAt = createdAt ? new Date(createdAt) : null;
        this.updatedAt = updatedAt ? new Date(updatedAt) : null;
    }
}