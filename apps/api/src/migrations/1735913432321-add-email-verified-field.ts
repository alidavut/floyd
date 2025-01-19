import { MigrationInterface, QueryRunner } from 'typeorm';
import { sql } from 'lib/literals';

export class AddEmailVerifiedField1735913432321 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      ALTER TABLE users
      ADD COLUMN email_verified BOOLEAN;

      UPDATE users
      SET email_verified = TRUE;

      ALTER TABLE users
      ALTER COLUMN email_verified SET NOT NULL;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(sql`
      ALTER TABLE users
      DROP COLUMN email_verified;
    `);
  }
}
