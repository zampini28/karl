import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateResponsavelTable1696168117001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "responsavel",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "cadastrdor_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "usuario_id",
                        type: "uuid",
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("responsavel");
    }

}
