import { Biodata } from '../../biodata/entities/biodata.entity';
export declare class LinkedIdentity {
    id: number;
    nin: string;
    mobileNumbers: string[];
    biodata: Biodata;
}
