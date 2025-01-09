import { MigrationInterface, QueryRunner } from 'typeorm';
import { sql } from 'lib/literals';

export class CreateEvents1735824982352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      CREATE TYPE event_status AS ENUM ('draft', 'published', 'archived');

      CREATE TABLE events (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        space_id UUID NOT NULL REFERENCES spaces(id),
        status event_status NOT NULL,
        title VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        description TEXT,
        starts_at TIMESTAMPTZ NOT NULL,
        ends_at TIMESTAMPTZ NOT NULL,
        time_zone VARCHAR NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

        CONSTRAINT unique_slug UNIQUE (space_id, slug)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      DROP TABLE events;
      DROP TYPE event_status;
    `);
  }
}
