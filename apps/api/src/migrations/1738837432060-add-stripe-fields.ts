import { MigrationInterface, QueryRunner } from 'typeorm';
import { sql } from 'lib/literals';

export class AddStripeFields1738837432060 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      ALTER TABLE users
      ADD COLUMN stripe_account_id VARCHAR,
      ADD COLUMN stripe_enabled BOOLEAN NOT NULL DEFAULT FALSE;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      ALTER TABLE users
      DROP COLUMN stripe_account_id,
      DROP COLUMN stripe_enabled;
    `);
  }
}
