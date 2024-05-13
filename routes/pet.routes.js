const express = require('express');
const router = express.Router();
const PetController = require('../controllers/pet.controllers')


router.post('/:tutorId', PetController.insertPet)

router.put('/:petId/tutors/:tutorId', PetController.updatePet)

router.delete('/:petId/tutors/:tutorId', PetController.deletePet)

module.exports = router;