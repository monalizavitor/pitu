import { Sequelize } from "sequelize"


//conexão com o banco de dados
const sequelize = new Sequelize("mysql://root:MonalizaVitor@127.0.0.1:3306/pitu")

export default sequelize
