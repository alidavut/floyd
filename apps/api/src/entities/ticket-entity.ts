import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';
import { Event } from '.';

@Entity('tickets')
export class Ticket extends BaseEntity {
  @Column()
  code: string;

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
