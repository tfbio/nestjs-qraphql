import { Controller, Get } from '@nestjs/common';
import { ProviderService } from '../services/ProviderService';

@Controller('/provider')
export class ProviderController {
  constructor(private readonly appService: ProviderService) {}

  @Get('count')
  async count(): Promise<string> {
    return this.appService.count();
  }
}
