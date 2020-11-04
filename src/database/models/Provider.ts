import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Client from './Client';
import Company from './Company';

@ObjectType()
@Entity('providers')
class Provider extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  person_id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  birthday: Date;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  profile_image: string;

  @Field()
  @Column({ default: true })
  is_active: boolean;

  @Field()
  @Column()
  company_id: string

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @Field(() => Company)
  company: Company;

  // Associations

  @ManyToOne(() => Company, company => company.providerConnection, {primary: true})
  @JoinColumn({name: 'company_id'})
  companyConnection: Promise<Provider>

  @OneToMany(()=> Client, client => client.providerConnection)
  clientConnection: Promise<Client>;
}

export default Provider;
