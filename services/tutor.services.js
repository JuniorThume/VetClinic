const Tutor = require('../models/tutor.model');

exports.getTutors = async function () {

    try {
        const tutors = Tutor.findAll({
            include: [
                'pets'
            ],
            attributes: { exclude: ['updatedAt', 'createdAt'] }
        })
        return await tutors;
    } catch (err) {
        throw Error('Nao foi possivel retornar os tutores cadastrados')
    }
}

exports.insertTutor = async function (reqBody) {

    try {
        const { name, phone, email, date_of_birth, zip_code, pets } = reqBody;
        await Tutor.create({
            pets,
            name,
            phone,
            email,
            date_of_birth,
            zip_code
        })
    } catch (err) {
        throw new Error("Não foi possivel inserir este usuario")
    }
}

exports.updateTutor = async function (tutorId, reqBody) {
    try {
        const {name, phone, email, date_of_birth, zip_code} = reqBody;    
        await Tutor.update(
            {
                "name": name,
                "phone": phone,
                "email": email,
                "date_of_birth": date_of_birth,
                "zip_code": zip_code
            },
            {
                where: { id: tutorId }
            })
    }catch (err) {
        throw Error(err.message)
    }
}

exports.deleteTutor = async function (idTutor) {

    try {
        const deleted = await Tutor.destroy({
            where: {
                id: idTutor
            }
        })
        if(!deleted) {
            throw Error("Tutor não encontrado")
        }
    }catch(err) {
        throw new Error(err.message)
    }
}


exports.findById = async function(id) {
    try {
        return await Tutor.findByPk(id)
    }catch (err) {
        console.log(err.message)
    }
}