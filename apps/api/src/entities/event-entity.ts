import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';
import { Space } from '.';

@Entity('events')
export class Event extends BaseEntity {
  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  duration: number;

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
