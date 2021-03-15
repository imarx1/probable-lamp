import { Module } from '@nestjs/common';
import { LinkedIdentityService } from './linkedIdentity.service';
import { LinkedIdentityController } from './linkedIdentity.controller';
import { LinkedIdentity } from './entities/linkedIdentity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biodata } from 'src/biodata/entities/biodata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinkedIdentity, Biodata])] ,
  controllers: [LinkedIdentityController],
  providers: [LinkedIdentityService]
})
export class LinkedIdentityModule {}
