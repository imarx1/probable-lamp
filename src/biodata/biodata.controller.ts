import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { CreateBiodataDto } from './dto/create-biodata.dto';
import { UpdateBiodataDto } from './dto/update-biodata.dto';

@Controller('biodata')
export class BiodataController {
  constructor(private readonly biodataService: BiodataService) {}

  @Post()
  create(@Body() createBiodataDto: CreateBiodataDto) {
    return this.biodataService.create(createBiodataDto);
  }

  @Get()
  findAll() {
    return this.biodataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biodataService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBiodataDto: UpdateBiodataDto) {
    return this.biodataService.update(+id, updateBiodataDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biodataService.remove(+id);
  }
}
