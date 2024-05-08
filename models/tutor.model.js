const Sequelize = require('sequelize');
const db = require('../db/connection');

const Tutor = db.define('tutor', {
    id: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    date_of_birth: {
        type: Sequelize.STRING
    },
    zip_code: {
        type: Sequelize.STRING
    },
    pets: {
        type: Sequelize.ARRAY
    }

})

module.exports = Tutor;