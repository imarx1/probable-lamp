import { Module } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { BiodataController } from './biodata.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Biodata} from './entities/biodata.entity'
import { LinkedIdentity } from '../linkedIdentity/entities/linkedIdentity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Biodata,LinkedIdentity])] ,
  controllers: [BiodataController],
  providers: [BiodataService]
})
export class BiodataModule {}
