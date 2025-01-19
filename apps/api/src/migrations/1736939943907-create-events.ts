import { MigrationInterface, QueryRunner } from 'typeorm';
import { sql } from 'lib/literals';

export class CreateEvents1736939943907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      CREATE TYPE event_status AS ENUM ('draft', 'published', 'archived');

      CREATE TABLE events (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        channel_id UUID NOT NULL REFERENCES channels(id),
        status event_status NOT NULL,
        title VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        description TEXT,
        image VARCHAR,
        starts_at TIMESTAMPTZ NOT NULL,
        mux_live_stream_id VARCHAR NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

        CONSTRAINT unique_slug UNIQUE (channel_id, slug)
      );

      CREATE TABLE tickets (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        event_id UUID NOT NULL REFERENCES events(id),
        code VARCHAR NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      DROP TABLE tickets;
      DROP TABLE events;
      DROP TYPE event_status;
    `);
  }
}
