import { Column, CreateDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';
import { Membership } from './membership-entity';

@Entity('spaces')
export class Space extends BaseEntity {
  @Column()
  handle: string;

  @Column()
  name: string;

  @OneToMany(() => Membership, membership => membership.space)
  memberships: Membership[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
