const express = require('express');
const router = express.Router();
const TutorController = require('../controllers/tutor.controllers')

router.post('/', TutorController.insertTutor);

router.get('/', TutorController.getTutors);

router.put('/:id', TutorController.updateTutor);

router.delete('/:id', TutorController.deleteTutor);

module.exports = router;