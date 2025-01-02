import { MigrationInterface, QueryRunner } from 'typeorm';
import { sql } from 'lib/literals';

export class CreateEvents1735824982352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      CREATE TABLE events (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        space_id UUID NOT NULL REFERENCES spaces(id),
        title VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        description TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

        CONSTRAINT unique_slug UNIQUE (space_id, slug)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      DROP TABLE events;
    `);
  }
}
