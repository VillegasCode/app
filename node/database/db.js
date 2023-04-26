import { Sequelize } from 'sequelize';
const db = new Sequelize('database_app','root','admin7',{
    host:'localhost',
    dialect:'mysql'
})

export default db