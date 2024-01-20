require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT;
const { createServer } = require("http");

const app = express();
const httpServer = createServer(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const dburi = 'mongodb+srv://ahmednagy:test123@cluster0.jnhdmvn.mongodb.net/meals?retryWrites=true&w=majority';

mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("conneted to the database");
        httpServer.listen(port, () => {
            console.log(`Server running on localhost:${port}`)
        })
    })
    .catch((err) => { console.log(err) });

