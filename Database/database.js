import { Sequelize } from "sequelize";
const sequelize = new Sequelize('fruver', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
    port: 3307
});
export{sequelize}