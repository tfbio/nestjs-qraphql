import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import Provider from './Provider';

@ObjectType()
@Entity('providers')
class Company extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  logo: string;

  @Field()
  @Column({ default: true })
  is_active: boolean;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  //Associations

  @OneToMany(() => Provider, provider => provider.companyConnection)
  providerConnection: Promise<Provider[]>;

}

export default Company;
