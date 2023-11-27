import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPatientsInfoToPatientsTable1700851704059 implements MigrationInterface {
    name = 'AddPatientsInfoToPatientsTable1700851704059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" ADD "weight" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ADD "genotype" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ADD "blood_group" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "blood_group"`);
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "genotype"`);
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "weight"`);
    }

}
