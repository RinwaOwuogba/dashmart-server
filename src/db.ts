import { knex } from 'knex';
import config from './config';

const db = knex(config.knex);

export default db;
