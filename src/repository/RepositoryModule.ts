import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Client from "src/database/models/Client";
import Provider from "src/database/models/Provider";
import RepositoryService from "./RepositoryService";

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Client,
      Provider
    ]),
  ],
  providers: [RepositoryService],
  exports: [RepositoryService],
})
class RepositoryModule {}

export default RepositoryModule;
