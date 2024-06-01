// NPM Modules
import knex from 'knex';
import bCrypt from 'bcryptjs';
import knexConfigs from '../../knex.configs';
import config from '../../src/config/variables.config';

const { ADMIN_PASSWORD } = config;

async function seed(pg) {
  // Deletes ALL existing entries

  // Deletes ALL existing entries with cascade.

  // Inserts seed entries

}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await seed(pg);
    console.log('Successfully inserted all data ... ');
  } catch (error) {
    console.error(error.message);
  }
}

init();
