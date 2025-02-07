import { MigrationInterface, QueryRunner } from 'typeorm';
import { sql } from 'lib/literals';

export class AddCountryToTheChannel1738941724708 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      ALTER TABLE channels
      RENAME COLUMN stripe_enabled TO charges_enabled;

      ALTER TABLE channels
      ADD COLUMN payouts_enabled BOOLEAN NOT NULL DEFAULT FALSE,
      ADD COLUMN country_code VARCHAR(2);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      ALTER TABLE channels
      DROP COLUMN payouts_enabled,
      DROP COLUMN country_code;

      ALTER TABLE channels
      RENAME COLUMN charges_enabled TO stripe_enabled;
    `);
  }
}
