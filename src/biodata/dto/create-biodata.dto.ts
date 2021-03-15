import { CreateLinkedIdentityDto } from "../../linkedIdentity/dto/create-linkedIdentity.dto";

export class CreateBiodataDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly nationality: string;
    readonly countryOfBirth: string;
    readonly stateOfBirth: string;
    readonly townOfBirth: string;
    readonly residenceAddress: string;
    readonly profession: string;
    readonly linkedIdentity: CreateLinkedIdentityDto

    
}
