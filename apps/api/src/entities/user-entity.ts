import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  handle: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}
