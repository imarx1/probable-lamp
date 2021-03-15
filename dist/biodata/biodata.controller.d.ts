import { BiodataService } from './biodata.service';
import { CreateBiodataDto } from './dto/create-biodata.dto';
import { UpdateBiodataDto } from './dto/update-biodata.dto';
export declare class BiodataController {
    private readonly biodataService;
    constructor(biodataService: BiodataService);
    create(createBiodataDto: CreateBiodataDto): Promise<import("./entities/biodata.entity").Biodata>;
    findAll(): Promise<import("./entities/biodata.entity").Biodata[]>;
    findOne(id: string): Promise<import("./entities/biodata.entity").Biodata>;
    update(id: string, updateBiodataDto: UpdateBiodataDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
