import { CreateLinkedIdentityDto } from './dto/create-linkedIdentity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linkedIdentity.dto';
import { DeleteResult, Repository } from 'typeorm';
import { LinkedIdentity } from './entities/linkedIdentity.entity';
export declare class LinkedIdentityService {
    private linkedIdentityRepository;
    constructor(linkedIdentityRepository: Repository<LinkedIdentity>);
    create(createLinkedIdentityDto: CreateLinkedIdentityDto): Promise<LinkedIdentity>;
    findAll(): Promise<LinkedIdentity[]>;
    findOne(id: number): Promise<LinkedIdentity>;
    update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto): string;
    remove(id: number): Promise<DeleteResult>;
}
