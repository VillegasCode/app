//Mirar el video https://www.youtube.com/watch?v=nqu9Zt68J_M
//Importamos la conexión de la Bade de datos
import db from "../database/db.js";
//Importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default BlogModel