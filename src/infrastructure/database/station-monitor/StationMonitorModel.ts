import { AutoIncrement, Column, CreatedAt, DataType, Default, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table({ tableName: 'station_monitor', timestamps: true })
export class StationMonitorModel extends Model<StationMonitorModel> {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    
    @Column({ field: 'date', type: DataType.DATEONLY,  allowNull: false })
    date: Date;

    @Column({ field: 'pms_park_id', type: DataType.INTEGER, allowNull: false })
    pmsParkId: number;

    @Column({ field: 'station_id', type: DataType.INTEGER, allowNull: false })
    stationId: number;

    @Column({ field: 'type_passage', type: DataType.ENUM('INPUT', 'OUTPUT'), allowNull: false })
    typePassage: 'INPUT' | 'OUTPUT';

    @Default(0)
    @Column({ field: 'passages', type: DataType.INTEGER})
    passages: number;

    @Default(0)
    @Column({ field: 'canceled', type: DataType.INTEGER })
    canceled: number;

    @Default(0)
    @Column({ field: 'min_passage_time', type: DataType.INTEGER })
    minPassageTime: number;

    @Default(0)
    @Column({ field: 'max_passage_time', type: DataType.INTEGER })
    maxPassageTime: number;

    @Default(0)
    @Column({ field: 'avg_passage_time', type: DataType.DECIMAL({ precision: 4 }) })
    avgPassageTime: number;

    @UpdatedAt
    @Column({ field: 'updated_at', type: DataType.DATE })
    updatedAt: Date;

    @CreatedAt
    @Column({ field: 'created_at', type: DataType.DATE })
    createdAt: Date;

}