import {Entity, Column, Generated, Index, PrimaryGeneratedColumn, PrimaryColumn, JoinColumn, OneToOne } from 'typeorm'
import {Biodata} from '../../biodata/entities/biodata.entity'


@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
        nin: string

    @Column('simple-array')
        mobileNumbers: string[]

   @OneToOne(type => Biodata, biodata => biodata.linkedIdentity)
    @JoinColumn()
        biodata: Biodata;    

}