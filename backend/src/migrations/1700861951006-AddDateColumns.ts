import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDateColumns1700861951006 implements MigrationInterface {
    name = 'AddDateColumns1700861951006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prompts" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "prompts" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prompts" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "prompts" DROP COLUMN "created_at"`);
    }

}
