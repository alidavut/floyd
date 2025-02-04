import { MigrationInterface, QueryRunner } from 'typeorm';
import { sql } from 'lib/literals';

export class CreateEvents1736939943907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      ALTER TABLE channels
      ADD currency_code VARCHAR(3) NOT NULL DEFAULT 'USD',
      ADD COLUMN stripe_id VARCHAR,
      ADD COLUMN stripe_enabled BOOLEAN DEFAULT FALSE;

      CREATE TYPE event_status AS ENUM ('draft', 'published', 'archived');

      CREATE TABLE events (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        channel_id UUID NOT NULL REFERENCES channels(id),
        status event_status NOT NULL,
        title VARCHAR NOT NULL,
        slug VARCHAR NOT NULL,
        description TEXT,
        image VARCHAR,
        price INTEGER NOT NULL,
        starts_at TIMESTAMPTZ NOT NULL,
        mux_live_stream_id VARCHAR NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

        CONSTRAINT unique_slug UNIQUE (channel_id, slug)
      );

      CREATE TABLE tickets (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        event_id UUID NOT NULL REFERENCES events(id),
        first_name VARCHAR NOT NULL,
        last_name VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        code VARCHAR NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

        CONSTRAINT unique_code UNIQUE (event_id, code)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      ALTER TABLE channels
      DROP COLUMN currency_code,
      DROP COLUMN stripe_id,
      DROP COLUMN stripe_enabled;

      DROP TABLE tickets;
      DROP TABLE events;
      DROP TYPE event_status;
    `);
  }
}
