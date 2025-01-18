import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';
import { Channel } from '.';
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
  image: string;

  @Column()
  startsAt: Date;

  @Column()
  channelId: string;

  @OneToOne(() => Channel)
  @JoinColumn()
  channel: Channel;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
