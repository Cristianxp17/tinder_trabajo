const  {sequelize}= require('sequelize');

const sequelize= new sequelize({
    dialect: 'postgres',
    username:process.env.DB_USER,
    host: process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

sequelize.authenticate()
.then(()=>{
    console.log('Conectado a la base de datos');
})
.cath((err)=>{
    console.error("error al conectarse a la base de datos", err);
    process.exit(1)
});

module.exports={
    sequelize
};