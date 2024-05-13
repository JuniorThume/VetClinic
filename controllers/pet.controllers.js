const Pet = require('../models/pet.model');
const PetServices = require('../services/pet.services')

exports.insertPet = async function (req, res, next) {
    const tutorId = req.params.tutorId;
    try {
        await PetServices.insertPet(req.body, tutorId)
        res.send(201, "status code 201")
    }catch(err) {
        res.status(400).send(err.message)
    }
}

exports.updatePet = async function (req, res, next) {
    const idPet = req.params.petId;
    const idTutor = req.params.tutorId;

    try {
        await PetServices.updatePet(idPet, idTutor, req.body);
        res.status(200).send("status code 200");
    }catch(err) {
        res.status(400).send(err.message)
    }
}

exports.deletePet = async function (req, res, next) {
    const idTutor = req.params.tutorId;
    const idPet = req.params.petId;

    try {
        await PetServices.deletePet(idTutor, idPet);
        res.status(200).send('status code 200');
    }catch(err) {
        res.status(400).send(err.message)
    }
}