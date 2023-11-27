import { MigrationInterface, QueryRunner } from "typeorm";

export class FixForeignKeyForPrompts1700861559765 implements MigrationInterface {
    name = 'FixForeignKeyForPrompts1700861559765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prompts" DROP CONSTRAINT "FK_e8835ef640cbf1602d2b2f7b765"`);
        await queryRunner.query(`ALTER TABLE "prompts" ALTER COLUMN "conversation_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "prompts" ADD CONSTRAINT "FK_e8835ef640cbf1602d2b2f7b765" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prompts" DROP CONSTRAINT "FK_e8835ef640cbf1602d2b2f7b765"`);
        await queryRunner.query(`ALTER TABLE "prompts" ALTER COLUMN "conversation_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "prompts" ADD CONSTRAINT "FK_e8835ef640cbf1602d2b2f7b765" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
