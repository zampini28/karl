import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTarefaTable1696170395026 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tarefa",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "titulo",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    },
                    {
                        name: "status",
                        type: "boolean",
                        isNullable: false,
                        default: false
                    },
                    {
                        name: "prazo",
                        type: "timestamp",
                        isNullable: false
                    },
                    {
                        name: "notaMax",
                        type: "decimal",
                        isNullable: false,
                        precision: 2,
                        scale: 2,
                        default: 10
                    },
                    {
                        name: "nota",
                        type: "decimal",
                        isNullable: true,
                        precision: 2,
                        scale: 2,
                        default: null
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
        await queryRunner.dropTable("tarefa");
    }

}
