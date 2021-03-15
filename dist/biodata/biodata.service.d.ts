import { CreateBiodataDto } from './dto/create-biodata.dto';
import { UpdateBiodataDto } from './dto/update-biodata.dto';
import { Repository } from 'typeorm';
import { Biodata } from './entities/biodata.entity';
export declare class BiodataService {
    private biodataRepository;
    constructor(biodataRepository: Repository<Biodata>);
    create(createBiodataDto: CreateBiodataDto): Promise<Biodata>;
    findAll(): Promise<Biodata[]>;
    findOne(id: number): Promise<Biodata>;
    update(id: number, updateBiodataDto: UpdateBiodataDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
