import { Knex } from 'knex';

const config = {
  isProduction: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || 8080,
  knex: {
    client: 'pg',
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  } as Knex.Config,
};

export default config;
