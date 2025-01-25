import { Column, CreateDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';
import { Membership } from './membership-entity';

@Entity('channels')
export class Channel extends BaseEntity {
  @Column()
  handle: string;

  @Column()
  name: string;

  @Column()
  stripeId: string;

  @Column()
  stripeEnabled: boolean;

  @OneToMany(() => Membership, membership => membership.channel)
  memberships: Membership[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
