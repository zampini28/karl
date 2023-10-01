import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateMaterialTable1696172214621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "material",
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
        await queryRunner.dropTable("material");
    }

}
