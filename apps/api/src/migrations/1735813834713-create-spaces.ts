import { MigrationInterface, QueryRunner } from 'typeorm';
import { sql } from 'lib/literals';

export class CreateSpaces1735813834713 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      CREATE TABLE spaces (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        handle VARCHAR NOT NULL UNIQUE,
        name VARCHAR NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE TYPE membership_role AS ENUM ('admin', 'member');

      CREATE TABLE memberships (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        role membership_role NOT NULL DEFAULT 'member',
        user_id UUID NOT NULL REFERENCES users(id),
        space_id UUID NOT NULL REFERENCES spaces(id),
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),

        CONSTRAINT user_space_unique UNIQUE (user_id, space_id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      DROP TABLE memberships;
      DROP TABLE spaces;
      DROP TYPE membership_role;
    `);
  }
}
