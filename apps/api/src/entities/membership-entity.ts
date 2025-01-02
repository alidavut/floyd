import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';
import { User, Space } from '.';
import { MembershipRole } from '@floyd/schema/enums';

@Entity('memberships')
export class Membership extends BaseEntity {
  @Column({ type: 'enum', enum: MembershipRole })
  role: MembershipRole;

  @Column()
  userId: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  spaceId: string;

  @OneToOne(() => Space)
  @JoinColumn()
  space: Space;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
