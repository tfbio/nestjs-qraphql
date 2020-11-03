import { Injectable } from '@nestjs/common';
import RepositoryService from '../repository/RepositoryService';

@Injectable()
export class ProviderService {
  constructor(private readonly repositoryService: RepositoryService) {}

  private providerRepository = this.repositoryService.providerRepository;

  async count(): Promise<string> {
    const info = await this.providerRepository.count();
    return `Number of registered providers is ${info}.`;
  }
}
