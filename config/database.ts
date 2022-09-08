export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "app.bdmis.org"),
      port: env.int("DATABASE_PORT", 5436),
      database: env("DATABASE_NAME", "jh_cms"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "peter"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});

// postgresql://postgres:peter@app.bdmis.org:5436/jh_cms
