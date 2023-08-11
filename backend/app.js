const express = require('express');
const path = require('path');
const logger = require('morgan');
const usersRouter = require('./app/routes/users');
const notesRouter = require("./app/routes/notes")
require("./config/database")
require("dotenv").config()
const cors = require("cors")
const port = 3001


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', usersRouter);
app.use('/notes',notesRouter)

app.listen(port,()=>{
    console.log("Server is runing in" + port)
})

module.exports = app;
