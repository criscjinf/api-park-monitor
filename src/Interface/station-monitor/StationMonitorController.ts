import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiParam, ApiProperty, ApiQuery, ApiTags } from "@nestjs/swagger";
import { DataType } from "sequelize-typescript";
import { CreateStationMonitor, DeleteStationMonitor, GetStationMonitor, ListStationMonitor } from "src/application";
import { ErrorInterceptor } from "../ErrorInterceptor";
import { getApiVersion } from "../utils/constant";
import { PostStationMonitorPayload } from "./PostStationMonitorPayload";


@ApiTags('station-monitor')
@Controller(`${getApiVersion()}/station-monitor`)
@UseInterceptors(ErrorInterceptor)
export class StationMonitorController {
    constructor(
        private createStationMonitor: CreateStationMonitor,
        private deleteStationMonitor: DeleteStationMonitor,
        private listStationMonitor: ListStationMonitor,
        private getStationMonitor: GetStationMonitor
    ) {}

    @ApiProperty()
    @ApiQuery({name: 'pmsParkId', required: false, type: DataType.INTEGER})
    @ApiQuery({name: 'stationId', required: false, type: DataType.INTEGER})
    @ApiQuery({name: 'date', required: false, type: DataType.DATEONLY})
    @ApiQuery({name: 'typePassage', required: false, type: DataType.STRING})
    @Get('/')
    async listAllStationMonitors(
        @Query('pmsParkId') pmsParkId: string,
        @Query('stationId') stationId: string,
        @Query('date') date: string,
        @Query('typePassage') typePassage: string
    ) {
        return await this.listStationMonitor.invoke(pmsParkId, stationId, date, typePassage);
    }

    @ApiProperty()
    @Get('/:stationId/:date/:typePassage')
    async getStationMonitorByStationIdAndDateAndTypePassage(
        @Param('stationId') stationId: string,
        @Param('date') date: string,
        @Param('typePassage') typePassage: string
    ) {
        return await this.getStationMonitor.invoke(stationId, date, typePassage)
    }

    @ApiProperty()
    @Delete('/:stationId/:date/:typePassage')
    @HttpCode(204)
    async removeStationMonitor(
        @Param('stationId') stationId: string,
        @Param('date') date: string,
        @Param('typePassage') typePassage: string
    ){
        await this.deleteStationMonitor.invoke(stationId, date, typePassage)
    }

    @ApiBody({ type: PostStationMonitorPayload })
    @Post('/')
    async newStationMonitor(
        @Body() body: PostStationMonitorPayload
    ){
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
        } = body

        return await this.createStationMonitor.invoke(
            date,
            pmsParkId,
            stationId,
            typePassage,
            passages,
            canceled,
            minPassageTime,
            maxPassageTime,
            avgPassageTime
        )
    }
}