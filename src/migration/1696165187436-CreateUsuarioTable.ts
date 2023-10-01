import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsuarioTable1696165187436 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario",
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
                        name: "rg",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    },
                    {
                        name: "n_telefone",
                        type: "varchar",
                        isNullable: true,
                        length: "255",
                        default: null
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    },
                    {
                        name: "usuario",
                        type: "varchar",
                        isNullable: false,
                        length: "255",
                        isUnique: true
                    },
                    {
                        name: "nacimento",
                        type: "date",
                        isNullable: false
                    },
                    {
                        name: "cadastro_em",
                        type: "timestamp",
                        isNullable: false,
                        default: "now()"
                    },
                    {
                        name: "atualizado_em",
                        type: "timestamp",
                        isNullable: false,
                        default: "now()"
                    },
                    {
                        name: "bloqueado",
                        type: "boolean",
                        isNullable: false,
                        default: false
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        isNullable: false,
                        length: "255"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuario");
    }

}
