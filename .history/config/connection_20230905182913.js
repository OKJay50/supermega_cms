import { Sequelize } from 'sequelize';
require('dotenv').config();
const sequelize = process.env.jawsDB_URL?new Sequelize(process.env.jawsDB_URL):
new Sequelize(process.env.dbName, process.env.db_User, process.env.db_Password, {
    host: "Localhost",
    dialect: "mysql",
    port: 3306,
})

module.exports = sequelize
