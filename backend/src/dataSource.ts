import { DataSource } from "typeorm"
import path from "path"

export const dataSource = new DataSource({
    "type": "mongodb",
    "url": process.env.DB_URL,
    "useNewUrlParser": true,
    "synchronize": true,
    "logging": true,
    "entities": [path.join(__dirname, 'models', '*.{ts,js}')]
})