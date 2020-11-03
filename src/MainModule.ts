import { Module } from '@nestjs/common';
import { ProviderController } from './controllers/ProviderController';
import { ProviderService } from './services/ProviderService';
import RepositoryModule from './repository/RepositoryModule';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ClientController } from './controllers/ClientController';
import { ClientService } from './services/ClientService';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepositoryModule
  ],
  controllers: [ProviderController, ClientController],
  providers: [ProviderService, ClientService],
})
export class MainModule {}
