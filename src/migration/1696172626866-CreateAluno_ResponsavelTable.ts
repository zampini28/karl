import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAlunoResponsavelTable1696172626866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "aluno_responsavel",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "responsavel_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "aluno_id",
                        type: "uuid",
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("aluno_responsavel");
    }

}
