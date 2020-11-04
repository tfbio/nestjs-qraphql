import { Module } from '@nestjs/common';
import { ProviderController } from './controllers/ProviderController';
import { ProviderService } from './services/ProviderService';
import RepositoryModule from './repository/RepositoryModule';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ClientController } from './controllers/ClientController';
import { ClientService } from './services/ClientService';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    RepositoryModule
  ],
  controllers: [ProviderController, ClientController],
  providers: [ProviderService, ClientService],
})
export class MainModule {}
