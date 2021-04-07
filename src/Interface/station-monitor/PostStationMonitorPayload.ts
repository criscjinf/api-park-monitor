import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { DataType } from "sequelize-typescript";

enum TypePassage {
    Input = 'INPUT',
    Output = 'OUTPUT'
}
export class PostStationMonitorPayload {

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    @ApiProperty({
        example: '2020-01-01 GMT-3:00',
        description: 'Data de extração dos dados'
    })
    date: Date;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 123,
        description: 'Código pms park id'
    })
    pmsParkId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 5,
        description: 'Código do terminal'
    })
    stationId: number;

    @IsEnum(TypePassage)
    @IsNotEmpty()
    @ApiProperty({
        example: 'INPUT',
        description: 'Define se o registro é de entradas ou saídas (INPUT || OUTPUT)'
    })
    typePassage: TypePassage;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 20,
        description: 'Número de entradas ou saídas realizadas menos os registros cancelados'
    })
    passages: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({
        example: 5,
        description: 'Número de entradas canceladas'
    })
    canceled: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 1,
        description: 'Menor tempo de acesso no dia de extração dos dados'
    })
    minPassageTime: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 8,
        description: 'Maior tempo de acesso no dia de extração dos dados'
    })
    maxPassageTime: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 3.28,
        description: 'Tempo médio de acesso no dia de extração dos dados',
        type: DataType.DECIMAL(4)
    })
    avgPassageTime: number;
}