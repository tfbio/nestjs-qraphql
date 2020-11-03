import { Controller, Get } from '@nestjs/common';
import { ClientService } from '../services/ClientService';

@Controller('/client')
export class ClientController {
  constructor(private readonly appService: ClientService) {}

  @Get('count')
  async count(): Promise<string> {
    return this.appService.count();
  }
}
