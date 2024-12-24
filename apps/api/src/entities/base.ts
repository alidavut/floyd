import { BaseEntity as Entity, Generated, PrimaryColumn } from 'typeorm';

export class BaseEntity extends Entity {
  @Generated()
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  set(data: Partial<this>): this {
    Object.assign(this, data);
    return this;
  }
}
