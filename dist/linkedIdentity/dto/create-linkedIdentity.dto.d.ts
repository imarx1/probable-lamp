import { CreateBiodataDto } from "src/biodata/dto/create-biodata.dto";
export declare class CreateLinkedIdentityDto {
    nin: string;
    mobileNumbers: string[];
    biodata: CreateBiodataDto;
}
