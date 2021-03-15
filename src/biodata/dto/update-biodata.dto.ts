import { UpdateLinkedIdentityDto } from "../../linkedIdentity/dto/update-linkedIdentity.dto";


export class UpdateBiodataDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly nationality: string;
    readonly countryOfBirth: string;
    readonly stateOfBirth: string;
    readonly townOfBirth: string;
    readonly residenceAddress: string;
    readonly profession: string;
    readonly linkedIdentity: UpdateLinkedIdentityDto;
    
}
