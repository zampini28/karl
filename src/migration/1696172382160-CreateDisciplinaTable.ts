import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateDisciplinaTable1696172382160 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "disciplina",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "disciplina",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("disciplina");
    }

}
