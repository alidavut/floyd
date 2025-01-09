import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';
import { Space } from '.';
import { EventStatus } from '@floyd/schema/enums';

@Entity('events')
export class Event extends BaseEntity {
  @Column({ type: 'enum', enum: EventStatus })
  status: EventStatus;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  startsAt: Date;

  @Column()
  endsAt: Date;

  @Column()
  timeZone: string;

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
