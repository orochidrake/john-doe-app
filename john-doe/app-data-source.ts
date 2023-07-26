import "reflect-metadata"
import { DataSource } from "typeorm"

import { User } from "./src/entity/User"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
    username: "postgres",
    password: "postgres",
    database: "johnDoe",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})