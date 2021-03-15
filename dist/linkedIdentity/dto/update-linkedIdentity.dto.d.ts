import { CreateBiodataDto } from "src/biodata/dto/create-biodata.dto";
export declare class UpdateLinkedIdentityDto {
    nin: string;
    mobileNumbers: string[];
    biodata: CreateBiodataDto;
}
