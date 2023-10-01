import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateNotaTable1696168944227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "nota",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
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
                    },
                    {
                        name: "prova",
                        type: "decimal",
                        isNullable: true,
                        precision: 2,
                        scale: 2,
                        default: null
                    },
                    {
                        name: "trabalho",
                        type: "decimal",
                        isNullable: true,
                        precision: 2,
                        scale: 2,
                        default: null
                    },
                    {
                        name: "nota_final",
                        type: "decimal",
                        isNullable: true,
                        precision: 2,
                        scale: 2,
                        default: null
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("nota");
    }

}
