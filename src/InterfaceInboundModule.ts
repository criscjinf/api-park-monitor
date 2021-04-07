import { Module } from "@nestjs/common";
import { ApplicationModule } from "./ApplicationModule";
import { InfrastructureModule } from "./InfrastructureModule";
import { ErrorInterceptor } from "./Interface/ErrorInterceptor";
import { HealthCheckController } from "./Interface/HealthCheckController";
import { ParkMonitorController } from "./Interface/park-monitor/ParkMonitorController";
import { StationMonitorController } from "./Interface/station-monitor/StationMonitorController";

@Module({
    imports: [
        ApplicationModule,
        InfrastructureModule
    ],
    controllers: [
        StationMonitorController,
        ParkMonitorController,
        HealthCheckController
    ],
    providers: [
        StationMonitorController,
        ParkMonitorController,
        HealthCheckController,
        ErrorInterceptor
    ]
})

export class InterfaceInboundModule {}