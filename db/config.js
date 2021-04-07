const {
    DB_HOST,
    DB_READ_HOST,
    DB_WRITE_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME,
    DB_PORT,
    DB_CONN,
  } = process.env;

  module.exports = {
    ...(DB_HOST
      ? {
        host: DB_HOST,
        username: DB_USER,
        password: DB_PASS,
      }
      : {
        replication: {
          read: [
            {
              host: DB_READ_HOST,
              username: DB_USER,
              password: DB_PASS,
            },
          ],
          write: {
            host: DB_WRITE_HOST,
            username: DB_USER,
            password: DB_PASS,
          },
        },
      }),
    database: DB_NAME || '',
    port: DB_PORT || '',
    dialect: DB_CONN || 'mysql',
    logging: console.log,
    timezone: '-03:00',
    dialectOptions: {
      connectTimeout: 600000,
    },
    define: {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  };