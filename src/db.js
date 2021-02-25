import Sequelize from 'sequelize'
import FilmModel from './models/films.js'
import UserModel from './models/users.js'
import dotenv from 'dotenv'
dotenv.config()

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env
const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:DB_HOST,
    port:DB_PORT,
    dialect:DB_DIALECT
})

const Film = FilmModel(sequelize,Sequelize)
const User = UserModel(sequelize,Sequelize)
sequelize.sync({force:false})
    .then( _ =>{
        console.log("Tablas Sincronizadas")
    })
    
export { Film, User }
