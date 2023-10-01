import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProfessorTable1696167825646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "professor",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "disciplina_id",
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
        await queryRunner.dropTable("professor");
    }

}
