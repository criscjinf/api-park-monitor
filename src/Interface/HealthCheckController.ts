import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { ErrorInterceptor } from "./ErrorInterceptor";
import { getApiVersion } from "./utils/constant";
const { version } = require('../../package.json')
@ApiTags('health-check')
@Controller(`${getApiVersion()}/health-check`)
@UseInterceptors(ErrorInterceptor)
export class HealthCheckController {
    @ApiProperty()
    @Get('/')
    async getHealthCheck() {
        return `Health ok! Version ${version} ${process.env.API_VERSION}`
    }
}
