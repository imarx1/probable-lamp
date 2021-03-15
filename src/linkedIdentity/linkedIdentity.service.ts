import { Injectable } from '@nestjs/common';
import { CreateLinkedIdentityDto } from './dto/create-linkedIdentity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linkedIdentity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm'
import {LinkedIdentity} from './entities/linkedIdentity.entity'

@Injectable()
export class LinkedIdentityService {

  constructor(
    @InjectRepository(LinkedIdentity) private linkedIdentityRepository: Repository<LinkedIdentity>,){}



 async create(createLinkedIdentityDto: CreateLinkedIdentityDto):Promise<LinkedIdentity> {
    const newLinkedIdentity =  this.linkedIdentityRepository.create(createLinkedIdentityDto);
    return await this.linkedIdentityRepository.save(newLinkedIdentity);
  }

  findAll() {
    return this.linkedIdentityRepository.find();
  }

  findOne(id: number) {
    return this.linkedIdentityRepository.findOne(id);
  }

  update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return `This action updates a #${id} linkedIdentity`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.linkedIdentityRepository.delete(id);
  }
}
