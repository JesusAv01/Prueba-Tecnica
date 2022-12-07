const student = require('../modelos/student.model')
const express = require("express");
const router = express.Router();
router.post('/newStudent/:nameStudent/:edadStudent',async function(req,res){

    let nombre = req.params.nameStudent
    let edad = req.params.edadStudent
    console.log(nombre)
    console.log(edad)
    try {
        let newestudiante = new student({
            name: nombre,
            age: edad,
            
        })
        newestudiante.save()
        res.status(200).json({
            mensaje:"Estudiante creado",
            data: newestudiante,
          });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje:"Estudiante no creado",
            error: error,
        })
        
    }
})
router.put('/updateStudent',async function(req,res){})
router.put('/deleteStudent',async function(req,res){})
router.get('/getStudents',async function(req,res){
    let estudiantes = await student.find()
})
module.exports = router;