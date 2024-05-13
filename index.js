require('dotenv').config();
const port_db = process.env.PORT_DB

// Configs basicas
const express = require('express');
const app = express();

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// db
const db = require('./db/connection')
db
    // .sync({force: true})
    .sync()
    .then(() => {
        app.listen(port_db, function(err){
            if(err) {
                console.log(err.message);
                process.exit(1);
            }
            console.log(`Listening on port ${port_db}`);
        })
        console.log("Authenticate successful");
    })
    .catch(() => {
        console.log("Authenticate failure");
    })

app.use('/tutors', require('./routes/tutor.routes'));
app.use('/pets', require('./routes/pet.routes'));

