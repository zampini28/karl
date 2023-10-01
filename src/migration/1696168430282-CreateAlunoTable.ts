import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAlunoTable1696168430282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "aluno",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "matricula",
                        type: "varchar",
                        isNullable: false,
                        length: "255",
                        isUnique: true
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
        await queryRunner.dropTable("aluno");
    }

}
