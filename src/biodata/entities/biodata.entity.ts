import {
     Entity,
     Column,
     Generated,
     Index,
     PrimaryGeneratedColumn,
     PrimaryColumn,
     JoinColumn,
     OneToOne,
   } from 'typeorm';
   import { LinkedIdentity } from '../../linkedIdentity/entities/linkedIdentity.entity';
   
   @Entity()
   export class Biodata {
     @Index()
     @PrimaryGeneratedColumn()
     id: number;
   
     @Column({ nullable: true })
     firstName: string;
   
     @Column({ nullable: true })
     lastName: string;
   
     @Column({ nullable: true })
     dateOfBirth: Date;
   
     @Column({ nullable: true })
     nationality: string;
   
     @Column({ nullable: true })
     countryOfBirth: string;
     @Column({ nullable: true })
     stateOfBirth: string;
   
     @Column({ nullable: true })
     townOfBirth: string;
   
     @Column({ nullable: true })
     residenceAddress: string;
   
     @Column({ nullable: true })
     profession: string;
   
     @OneToOne(
       type => LinkedIdentity,
       linkedIdentity => linkedIdentity.biodata)
                linkedIdentity: LinkedIdentity;
   }
   