const express = require('express');
const app = express();
const PORT = 5000;
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))








app.listen(PORT, function(err){
    if(err) {
        console.log(err.message);
        return
    }
    console.log(`Listening on port ${PORT}`);
})
