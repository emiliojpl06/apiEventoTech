import Sequelize from 'sequelize'

let host = process.env.HOST || 'localhost';
let user = process.env.USERNAME || 'root';
let password = process.env.PASSWORD || ''

console.log(host, user, password);

const sequelize = new Sequelize('tech_day', 
user, password, {
    host: host,
    dialect: 'mysql'
})

export default sequelize;