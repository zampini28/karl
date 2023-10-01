import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTurmaTable1696168664681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "turma",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    },
                    {
                        name: "disciplina_id",
                        type: "uuid",
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("turma");
    }

}
