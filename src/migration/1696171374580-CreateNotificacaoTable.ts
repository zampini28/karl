import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateNotificacaoTable1696171374580 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "notificacao",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "conteudo",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    },
                    {
                        name: "aluno_id",
                        type: "uuid",
                        isNullable: false
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
        await queryRunner.dropTable("notificacao");
    }

}
