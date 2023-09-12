import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config()DB_NAME = ''
const sequelize = process.env.jawsDB_URL?new Sequelize(process.env.jawsDB_URL):
new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "Localhost",
    dialect: "mysql",
    port: 3306,
})

module.exports = sequelize
