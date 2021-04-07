import { Module } from "@nestjs/common";
import { CreateParkMonitor, CreateStationMonitor, DeleteParkMonitor, DeleteStationMonitor, GetParkMonitor, GetStationMonitor, ListParkMonitor, ListStationMonitor } from "./application";
import { InfrastructureModule } from "./InfrastructureModule";

const providers = [
    CreateParkMonitor,    
    ListParkMonitor,
    GetParkMonitor,
    DeleteParkMonitor,
    CreateStationMonitor,
    ListStationMonitor,
    GetStationMonitor,
    DeleteStationMonitor
]

@Module({
    imports: [InfrastructureModule],
    controllers: [],
    exports: providers,
    providers
})

export class ApplicationModule { }
