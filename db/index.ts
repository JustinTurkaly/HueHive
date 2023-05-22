// eslint-disable-next-line import/no-extraneous-dependencies
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PGHOST,
  port: 5432,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

export default pool;
