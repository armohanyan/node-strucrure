import knex from 'knex';
import knexConfigs from '../knex.configs';

function down(pg){
    return pg.schema
    .dropTableIfExists("user");

}

async function init() {
    try {
      const options = process.env.NODE_ENV === 'production'
        ? knexConfigs.production
        : knexConfigs.development;
      const pg = knex(options);
      await down(pg);
      console.log('Successfully dropped all tables ... ');
      process.kill(process.pid);
    } catch (error) {
      LoggerUtil.error(error.message);
    }
  }
  