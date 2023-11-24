import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeContactNumberNullable1700853865206 implements MigrationInterface {
    name = 'MakeContactNumberNullable1700853865206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "contact_number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "contact_number" SET NOT NULL`);
    }

}
