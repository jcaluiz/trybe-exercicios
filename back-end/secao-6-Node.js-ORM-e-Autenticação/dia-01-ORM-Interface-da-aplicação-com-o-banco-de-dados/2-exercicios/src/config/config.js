// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  host: process.env.SQL_HOST,
  dialect: process.env.SQL_DIALECT,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};