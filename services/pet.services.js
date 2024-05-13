const Pet = require('../models/pet.model');

exports.insertPet = async function (reqBody, tutorId) {
    const { id, name, species, carry, weight, date_of_birth } = reqBody;
    try {
        Pet.create({
            id,
            tutorId,
            name,
            species,
            carry,
            weight,
            date_of_birth,
        })
    } catch (err) {
        throw Error('Não foi possivel inserir o Pet')
    }
}

exports.updatePet = async function (idPet, idTutor, reqBody) {
    const {name, species, carry, weight, date_of_birth, tutorId} = reqBody
    try {
        await Pet.update(
            {
                "name": name,
                "species": species,
                "carry": carry,
                "weight": weight,
                "date_of_birth": date_of_birth,
            },
            {
                where: {
                    id: idPet,
                    tutorId: idTutor,
                }
            }
        ).then(res => {
            if(!res[0]) {
                throw Error("O id do Pet ou do Usuario podem estar incorretos");
            }
        })
    }catch (err) {
        throw Error(err.message);
    }     
}

exports.deletePet = async function (idTutor, idPet) {
    
    try {
        const deleted = await Pet.destroy({
            where: {
                id: idPet,
                tutorId: idTutor,
            }
        })
        if(!deleted) {
            throw Error('Pet não encontrado')
        }
    } catch (err) {
        throw Error(err.message)
    }
}