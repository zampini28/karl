import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCalendarioTable1696170947055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "calendario",
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
                        name: "link",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    },
                    {
                        name: "administrador_id",
                        type: "uuid",
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("calendario");
    }

}
