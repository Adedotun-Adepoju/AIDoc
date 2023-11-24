import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleAndContentToPrompts1700861895513 implements MigrationInterface {
    name = 'AddRoleAndContentToPrompts1700861895513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prompts" DROP COLUMN "user_input"`);
        await queryRunner.query(`ALTER TABLE "prompts" DROP COLUMN "model_response"`);
        await queryRunner.query(`ALTER TABLE "prompts" DROP COLUMN "request_type"`);
        await queryRunner.query(`ALTER TABLE "prompts" ADD "role" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "prompts" ADD "content" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prompts" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "prompts" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "prompts" ADD "request_type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "prompts" ADD "model_response" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "prompts" ADD "user_input" text NOT NULL`);
    }

}
