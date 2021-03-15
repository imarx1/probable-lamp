import { LinkedIdentityService } from './linkedIdentity.service';
import { CreateLinkedIdentityDto } from './dto/create-linkedIdentity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linkedIdentity.dto';
export declare class LinkedIdentityController {
    private readonly linkedIdentityService;
    constructor(linkedIdentityService: LinkedIdentityService);
    create(createLinkedIdentityDto: CreateLinkedIdentityDto): Promise<import("./entities/linkedIdentity.entity").LinkedIdentity>;
    findAll(): Promise<import("./entities/linkedIdentity.entity").LinkedIdentity[]>;
    findOne(id: string): Promise<import("./entities/linkedIdentity.entity").LinkedIdentity>;
    update(id: string, updateLinkedIdentityDto: UpdateLinkedIdentityDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
