import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm';

const port = process.env.POSTGRES_PORT as number | undefined;

export const AppDataSourse = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: port,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ['./src/entites/*{.ts, .js}'],
	migrations: ['./src/migrations/*{.ts, .js}'],
})