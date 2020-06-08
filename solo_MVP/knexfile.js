// Update with your config settings.
require("dotenv").config({ path: __dirname + "/.env" });
console.log(process.env.DATABASE);
console.log(process.env.USER);
console.log(process.env.DBPORT);
`postgres://${process.env.USER}@127.0.0.1:5432/truckstop`;
module.exports = {
  development: {
    client: "pg",
    connection: `postgres://${process.env.USER}@127.0.0.1:5432/ballettest`,
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
