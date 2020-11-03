import { Injectable } from '@nestjs/common';
import RepositoryService from '../repository/RepositoryService';

@Injectable()
export class ClientService {
  constructor(private readonly repositoryService: RepositoryService) {}

  private clientRepository = this.repositoryService.clientRepository;

  async count(): Promise<string> {
    const info = await this.clientRepository.count();
    return `Number of registered clients is ${info}.`;
  }
}
