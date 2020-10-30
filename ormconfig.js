module.exports = {
  "name": "default",
  "type": "postgres",
  "host": process.env.TYPEORM_HOST,
  "port": 5432,
  "username": process.env.TYPEORM_CONNECTION_USERNAME,
  "password": process.env.TYPEORM_CONNECTION_PASSWORD,
  "database": process.env.TYPEORM_DATABASE_NAME,
  "logging": ["error"],
  "entities": [
    process.env.TYPEORM_ENTITIES_DIR
  ],
  "migrations": [
    process.env.TYPEORM_MIGRATIONS
  ],
  "cli": {
    "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR
  }
}