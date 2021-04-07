import { Module } from "@nestjs/common";
import { DatabaseModule } from "./DatabaseModule";

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [],
    exports: [DatabaseModule]
})

export class InfrastructureModule {}