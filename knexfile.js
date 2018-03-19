// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: "postgres:///game"},

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
};
