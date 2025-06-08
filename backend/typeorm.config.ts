import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from './src/user/entities/user.entity';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  migrations: ['src/migration/*.ts'],
  synchronize: false,
}); 