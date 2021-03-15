import { LinkedIdentity } from '../../linkedIdentity/entities/linkedIdentity.entity';
export declare class Biodata {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    nationality: string;
    countryOfBirth: string;
    stateOfBirth: string;
    townOfBirth: string;
    residenceAddress: string;
    profession: string;
    linkedIdentity: LinkedIdentity;
}
