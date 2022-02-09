const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ticTacToe',
  password: 'postgres',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  // eslint-disable-next-line no-console
  console.log(err, res);
  pool.end();
});
