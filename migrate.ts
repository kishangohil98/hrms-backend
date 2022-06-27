import { Sequelize } from 'sequelize-typescript';
import { Umzug, SequelizeStorage } from 'umzug';
import { databaseConfig } from './src/core/database/database.config';
import * as dotenv from 'dotenv';
dotenv.config();

let config;
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    config = databaseConfig.production;
  case 'dev':
  case 'development':
    config = databaseConfig.development;
  default:
    config = databaseConfig.development;
}
const sequelize = new Sequelize(config);

const umzug = new Umzug({
  migrations: { glob: 'src/core/database/migrations/*.ts' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize, tableName: 'Migrations' }),
  logger: console,
});

const up = async () => {
  // Checks migrations and run them if they are not already applied. To keep
  // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  await umzug.up();
};

const down = async () => {
  // Drop the recent migration
  await umzug.down();
};

(async () => {
  const cmd = process.argv[2].trim();
  console.log('cmd', cmd);

  switch (cmd) {
    case 'up':
    case '': {
      await up();
      break;
    }
    case 'down': {
      await down();
      break;
    }
    // NOTE: Here, We can implement further actions of Umzug like statu check, pending migrations list, reset DB
    default: {
      console.log(
        'No Database statement executed, Please specify operation[up, down]',
      );
      console.log('Existing!');
      break;
    }
  }
})();

export type Migration = typeof umzug._types.migration;
