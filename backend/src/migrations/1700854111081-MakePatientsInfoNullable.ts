import { MigrationInterface, QueryRunner } from "typeorm";

export class MakePatientsInfoNullable1700854111081 implements MigrationInterface {
    name = 'MakePatientsInfoNullable1700854111081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "weight" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "genotype" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "blood_group" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "blood_group" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "genotype" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "weight" SET NOT NULL`);
    }

}
