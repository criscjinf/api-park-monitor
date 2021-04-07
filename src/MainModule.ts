import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config/dist/config.module";
import databaseConfig from "./infrastructure/config/database";
import { InfrastructureModule } from "./InfrastructureModule";
import { InterfaceInboundModule } from "./InterfaceInboundModule";
import { ApplicationModule } from "./ApplicationModule";

const CONFIG_MODULE_OPTIONS = {
    isGlobal: true,
    load: [databaseConfig]
}

@Module({
    imports: [
        ConfigModule.forRoot(CONFIG_MODULE_OPTIONS),
        InterfaceInboundModule,
        InfrastructureModule,
        ApplicationModule
    ],
    controllers: [],
    providers: []
})

export class MainModule { }