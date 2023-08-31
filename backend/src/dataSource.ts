import { DataSource } from "typeorm"
import path from "path"

export const dataSource = new DataSource({
    type: "mongodb",

    // host: process.env.DB_HOST,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    url: process.env.DB_URL,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: [path.join(__dirname, 'models', '*.{ts,js}')],
    port: Number(process.env.DB_PORT),
    database: "digital-phonebook",
})