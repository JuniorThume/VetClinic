const Sequelize = require('sequelize');
const db = require('../db/connection');

const Pet = db.define('tutor', {
    id: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    species: {
        type: Sequelize.STRING
    },
    carry: {
        type: Sequelize.STRING
    },
    weight: {
        type: Sequelize.STRING
    },
    date_of_birth: {
        type: Sequelize.ARRAY
    }

})

module.exports = Pet;