const Sequelize = require('sequelize');
const db = require('../db/connection');

const Pet = db.define('tutor', {
    id: {
        type: Sequelize.INTEGER
    },
    id_tutor: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    species: {
        type: Sequelize.STRING
    },
    carry: {
        type: Sequelize.CHAR
    },
    weight: {
        type: Sequelize.DOUBLE
    },
    date_of_birth: {
        type: Sequelize.DATE
    }

})

module.exports = Pet;