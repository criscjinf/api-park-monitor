import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Sequelize } from "sequelize-typescript";
import {
    ParkMonitorMapper,
    ParkMonitorModel,
    ParkMonitorRepository,
    StationMonitorMapper,
    StationMonitorModel,
    StationMonitorRepository
} from "./infrastructure";

const stationMonitorRepositoryProvider = {
    provide: 'StationMonitorRepo',
    useClass: StationMonitorRepository
}

const parkMonitorRepositoryProvider = {
    provide: 'ParkMonitorRepo',
    useClass: ParkMonitorRepository
}

const sequelizeProvider = {
    provide: Sequelize,
    inject: [ ConfigService ],
    useFactory: async (configService: ConfigService) => {
        const config = configService.get('database');
        const sequelize = new Sequelize(config);
        sequelize.addModels([ StationMonitorModel, ParkMonitorModel]);
        await sequelize.sync();
        return sequelize;
    }
}

const providers = [
    sequelizeProvider,
    stationMonitorRepositoryProvider,
    parkMonitorRepositoryProvider,
    StationMonitorMapper,
    ParkMonitorMapper
]

@Module({
    imports: [],
    controllers: [],
    exports: providers,
    providers
})

export class DatabaseModule { }