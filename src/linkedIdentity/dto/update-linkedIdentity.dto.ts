import { CreateBiodataDto } from "src/biodata/dto/create-biodata.dto";
import { Biodata } from "src/biodata/entities/biodata.entity";

export class UpdateLinkedIdentityDto {
    nin: string;
    mobileNumbers: string[];
    biodata: CreateBiodataDto


}
