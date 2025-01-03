import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';
import { Event } from '.';

@Entity('sessions')
export class Session extends BaseEntity {
  @Column()
  startsAt: Date;

  @Column()
  eventId: string;

  @OneToOne(() => Event)
  @JoinColumn()
  event: Event;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
