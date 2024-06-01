import knex from 'knex';
import knexConfigs from '../knex.configs';
import {LoggerUtil} from '../src/utils'

function up(pg) {
    return pg.schema
        .createTable('user', (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.dateTime("createdd_add");
            table.dateTime("updated_at");

        })

}
async function init() {
    try {
      const options = process.env.NODE_ENV === 'production'
        ? knexConfigs.production
        : knexConfigs.development;
      const pg = knex(options);
      await up(pg);
      console.log('Successfully created all tables ... ');
      process.kill(process.pid);
    } catch (error) {
      LoggerUtil.error(error.message);
    }
  }
  
  init();