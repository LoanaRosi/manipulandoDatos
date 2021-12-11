require('dotenv').config()

module.exports={
  "development": {
    "username": 'root',
    "password": '123456',
    "database": 'movies_db',
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "port" : process.env.DB_PORT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
