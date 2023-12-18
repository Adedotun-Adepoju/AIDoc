import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterWeightFieldType1702882168428 implements MigrationInterface {
    name = 'AlterWeightFieldType1702882168428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // You can add a new column with the new type
        await queryRunner.query(`ALTER TABLE "patients" ADD "new_weight" character varying`);

        // Copy data from the old column to the new column
        await queryRunner.query(`UPDATE "patients" SET "new_weight" = "weight"`);

        // Drop the old column
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "weight"`);

        // Rename the new column to the original column name
        await queryRunner.query(`ALTER TABLE "patients" RENAME COLUMN "new_weight" TO "weight"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Add the old column with the original type
        await queryRunner.query(`ALTER TABLE "patients" ADD "old_weight" integer`);

        // Copy data from the new column to the old column
        await queryRunner.query(`UPDATE "patients" SET "old_weight" = "weight"`);

        // Drop the new column
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "weight"`);

        // Rename the old column to the original column name
        await queryRunner.query(`ALTER TABLE "patients" RENAME COLUMN "old_weight" TO "weight"`);
    }

}
