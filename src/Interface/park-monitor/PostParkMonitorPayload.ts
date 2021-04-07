import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class PostParkMonitorPayload {

    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
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
    pms_park_id: number;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 10,
        description: 'Total de entradas no dia menos entradas canceladas'
    })
    inputs: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 9,
        description: 'Total de saídas no dia'
    })
    outputs: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({
        example: 5,
        description: 'Total de entradas canceladas'
    })
    canceled: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 1,
        description: 'Total de entradas + saídas - cancelados'
    })
    access: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 1,
        description: 'Menor tempo de entrada no dia da extração dos dados'
    })
    min_input_time: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 8,
        description: 'Maior tempo de entrada no dia da extração dos dados'
    })
    max_input_time: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 3,
        description: 'Tempo médio de entrada no dia da extração dos dados'
    })
    avg_input_time: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 1,
        description: 'Menor tempo de saída no dia da extração dos dados'
    })
    min_output_time: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 8,
        description: 'Maior tempo de saída no dia da extração dos dados'
    })
    max_output_time: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 3.41,
        description: 'Tempo médio de saída no dia da extração dos dados'
    })
    avg_output_time: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 1.34,
        description: 'Menor valor pago no dia da extração dos dados'
    })
    min_amount_due: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 8.98,
        description: 'Maior valor pago no dia da extração dos dados'
    })
    max_amount_due: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 3.25,
        description: 'Valor médio pago no dia da extração dos dados'
    })
    avg_amount_due: number;
}