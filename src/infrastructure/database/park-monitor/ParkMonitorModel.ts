import { AutoIncrement, Column, CreatedAt, DataType, Default, PrimaryKey, Model, Table, UpdatedAt } from "sequelize-typescript";

@Table({ tableName: 'park_monitor', timestamps: true })
export class ParkMonitorModel extends Model<ParkMonitorModel> {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column({ field: 'date', type: DataType.DATEONLY, allowNull: false })
    date: Date;

    @Column({ field: 'pms_park_id', type: DataType.INTEGER, allowNull: false })
    pmsParkId: number;

    @Default(0)
    @Column({ field: 'inputs', type: DataType.INTEGER })
    inputs: number

    @Default(0)
    @Column({ field: 'outputs', type: DataType.INTEGER})
    outputs: number;

    @Default(0)
    @Column({ field: 'canceled', type: DataType.INTEGER })
    canceled: number;

    @Default(0)
    @Column({ field: 'access', type: DataType.INTEGER })
    access: number;

    @Default(0)
    @Column({ field: 'min_input_time', type: DataType.INTEGER })
    minInputTime: number;

    @Default(0)
    @Column({ field: 'max_input_time', type: DataType.INTEGER })
    maxInputTime: number;

    @Default(0)
    @Column({ field: 'avg_input_time', type: DataType.DECIMAL({ precision: 4 }) })
    avgInputTime: number;

    @Default(0)
    @Column({ field: 'min_output_time', type: DataType.INTEGER })
    minOutputTime: number;

    @Default(0)
    @Column({ field: 'max_output_time', type: DataType.INTEGER })
    maxOutputTime: number;

    @Default(0)
    @Column({ field: 'avg_output_time', type: DataType.DECIMAL({ precision: 4 }) })
    avgOutputTime: number;

    @Default(0)
    @Column({ field: 'min_amount_due', type: DataType.DECIMAL({ precision: 4 })})
    minAmountDue: number;

    @Default(0)
    @Column({ field: 'max_amount_due', type: DataType.DECIMAL({ precision: 4 })})
    maxAmountDue: number;

    @Default(0)
    @Column({ field: 'avg_amount_due', type: DataType.DECIMAL({ precision: 4 })})
    avgAmountDue: number;

    @UpdatedAt
    @Column({ field: 'updated_at', type: DataType.DATE })
    updatedAt: Date;

    @CreatedAt
    @Column({ field: 'created_at', type: DataType.DATE })
    createdAt: Date;

}