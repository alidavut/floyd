import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const basePath = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

const config = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    path.join(basePath, 'entities/**/*-entity{.ts,.js}')
  ],
  migrations: [
    path.join(basePath, 'migrations/**/*{.ts,.js}')
  ],
  subscribers: [
    path.join(basePath, 'entities/**/*-subscriber{.ts,.js}')
  ],
  cli: {
    migrationsDir: './src/migrations'
  },
  namingStrategy: new SnakeNamingStrategy()
}

if (process.env.NODE_ENV === 'production') {
  config['ssl'] = {
    rejectUnauthorized: false,
  };
}

const dataSource = new DataSource(config as DataSourceOptions);;

export async function initializeDataSource() {
  await dataSource.initialize();
}

export default dataSource;
