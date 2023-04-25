import { Sequelize } from "sequelize";
const db = new Sequelize('databse_app','root','admin7',{
    host:'localhost',
    dialect:'mysql'
})

export default db