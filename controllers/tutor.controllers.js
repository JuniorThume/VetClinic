const TutorServices = require('../services/tutor.services')

exports.insertTutor = async function(req, res, next) {
    try {
        await TutorServices.insertTutor(req.body)
        res.status(201).send('tutor criado')
    }catch(err){
        res.status(400).send(err.message)
    }
    
}

exports.updateTutor = async function(req, res, next) {
    
    const idTutor = req.params.id;
    const tutorExists = await TutorServices.findById(idTutor);
    try {
        if(tutorExists === null) {
            throw new Error("Tutor não encontrado")       
        }
        await TutorServices.updateTutor(idTutor, req.body)
        res.status(200).send('status code 200')
    }catch(err) {
        res.status(400).send(err.message)
    }

}

exports.getTutors = async function(req, res, next) {
    try{
        const tutors = await TutorServices.getTutors()
        res.status(200).send(tutors)
        
    } catch(err) {
        res.status(400, err.message)
    }
}

exports.deleteTutor = async function (req, res, next) {
    
    const idTutor = req.params.id;
    try {
        await TutorServices.deleteTutor(idTutor)
        res.status(200).send('status code 200')
    }catch(err) {
        res.status(400).send(err.message)
    }

}



