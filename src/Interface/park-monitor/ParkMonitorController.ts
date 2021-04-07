import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, UseInterceptors } from "@nestjs/common";
import { ApiProperty, ApiQuery, ApiTags } from "@nestjs/swagger";
import { DataType } from "sequelize-typescript";
import { CreateParkMonitor, DeleteParkMonitor, GetParkMonitor, ListParkMonitor } from "src/application";
import { ErrorInterceptor } from "../ErrorInterceptor";
import { getApiVersion } from "../utils/constant";
import { PostParkMonitorPayload } from "./PostParkMonitorPayload";
@ApiTags('park-monitor')
@Controller(`${getApiVersion()}/park-monitor`)
@UseInterceptors(ErrorInterceptor)
export class ParkMonitorController {
    constructor(
        private createParkMonitor: CreateParkMonitor,
        private deleteParkMonitor: DeleteParkMonitor,
        private listParkMonitor: ListParkMonitor,
        private getParkMonitor: GetParkMonitor
    ) {}

    @ApiProperty()
    @ApiQuery({name: 'pmsParkId', required: false, type: DataType.INTEGER})
    @ApiQuery({name: 'date', required: false, type: DataType.DATEONLY})
    @Get('/')
    async listAllParkMonitors(
        @Query('pmsParkId') pmsParkId: string,
        @Query('date') date: string
    ) {
        return await this.listParkMonitor.invoke(pmsParkId, date);
    }

    @ApiProperty()
    @Get('/:pmsParkId/:date')
    async getParkMonitorByPmsParkIdAndDate(
        @Param('pmsParkId') pmsParkId: string,
        @Param('date') date: string
    ) {
        return await this.getParkMonitor.invoke(pmsParkId, date);
    }

    @ApiProperty()
    @Delete('/:pmsParkId/:date')
    @HttpCode(204)
    async removeParkMonitor(
        @Param('pmsParkId') pmsParkId: string,
        @Param('date') date: string
    ){
        await this.deleteParkMonitor.invoke(pmsParkId, date)
    }

    @ApiProperty({ type: PostParkMonitorPayload })
    @Post('/')
    async newParkMonitor(@Body() body: PostParkMonitorPayload) {
        const {
            date,
            pms_park_id,
            inputs,
            outputs,
            canceled,
            access,
            min_input_time,
            max_input_time,
            avg_input_time,
            min_output_time,
            max_output_time,
            avg_output_time,
            min_amount_due,
            max_amount_due,
            avg_amount_due,
        } = body
        
        return await this.createParkMonitor.invoke(
            date,
            pms_park_id,
            inputs,
            outputs,
            canceled,
            access,
            min_input_time,
            max_input_time,
            avg_input_time,
            min_output_time,
            max_output_time,
            avg_output_time,
            min_amount_due,
            max_amount_due,
            avg_amount_due,
        )
    }
}