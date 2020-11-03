import { InjectRepository } from "@nestjs/typeorm";
import Client from "src/database/models/Client";
import Provider from "src/database/models/Provider";
import { Repository } from "typeorm";

class RepositoryService {
  public constructor(
    @InjectRepository(Client)
    public readonly clientRepository: Repository<Client>,

    @InjectRepository(Provider)
    public readonly providerRepository: Repository<Provider>,
  ){}

}

export default RepositoryService;
