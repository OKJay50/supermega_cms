import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
const result = dotenv.config()
dotenv.config()
if (result.error){
    throw result.error;
}
const sequelize = process.env.jawsDB_URL?new Sequelize(process.env.jawsDB_URL):
new Sequelize("jawsDB_URL", process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "Localhost",
    dialect: "mysql",
    port: 3306,
})

module.exports = sequelize
