import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1695718256251 implements MigrationInterface {
    name = 'MyMigration1695718256251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pemilus" ("id" SERIAL NOT NULL, "name" character varying, "visi" text NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_c290d4c2d460680d71ed2fafa35" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pemilus"`);
    }

}
