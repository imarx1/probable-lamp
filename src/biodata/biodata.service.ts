import { Injectable } from '@nestjs/common';
import { CreateBiodataDto } from './dto/create-biodata.dto';
import { UpdateBiodataDto } from './dto/update-biodata.dto';
import {Repository} from 'typeorm'
import {Biodata} from './entities/biodata.entity'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BiodataService {
  


constructor(
  @InjectRepository(Biodata) private biodataRepository: Repository<Biodata>,){}

  async create(createBiodataDto: CreateBiodataDto): Promise<Biodata> {
    const newBiodata = this.biodataRepository.create(createBiodataDto);
    
    return await this.biodataRepository.save(newBiodata);
    
   
  }

  findAll() {


    return this.biodataRepository.find();
  }

  findOne(id: number) {

    return this.biodataRepository.findOne(id)
  }

  update(id: number, updateBiodataDto: UpdateBiodataDto) {
    return `This action updates a #${id} biodata`;
  }

  remove(id: number) {
    return this.biodataRepository.delete(id);
  }
}
