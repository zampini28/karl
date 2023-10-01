import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Usuario } from "./entity/Usuario";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Usuario],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
});
