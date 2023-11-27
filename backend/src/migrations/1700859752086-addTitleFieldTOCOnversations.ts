import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTitleFieldTOCOnversations1700859752086 implements MigrationInterface {
    name = 'AddTitleFieldTOCOnversations1700859752086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "conversations" ADD "title" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "conversations" DROP COLUMN "title"`);
    }

}
