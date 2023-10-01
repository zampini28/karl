import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateFAQTable1696170103960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "FAQ",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "autor_usuario_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "conteudo",
                        type: "text",
                        isNullable: false
                    },
                    {
                        name: "data",
                        type: "timestamp",
                        isNullable: false,
                        default: "now()"
                    },
                    {
                        name: "turma_id",
                        type: "uuid",
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('FAQ');
    }

}
