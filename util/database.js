/* This files will contain the database{DB} connection details START HERE !! SMRUTI RANJAN BEHERA*/

/* DESCRIPTION OF {Sequelize} is a Node. js-based Object Relational Mapper that makes it easy to work with MySQL, 
PostgreSQL databases, and more. An Object Relational Mapper performs functions like handling database records by representing the data as objects.*/

/* {host: process.env.PG_HOST, } Imp -> this line is used for connect from DB to Application*/

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: 'postgres',
    }
);

module.exports = sequelize;