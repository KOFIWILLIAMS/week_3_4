const express =require('express');
const router =express.Router();

const studentsController =require('../controllers/students');

router.get('/', studentsController.getALL);

router.get('/:id', studentsController.getSingle);

// Routes are here

router.post('/', studentsController.addStudent);

router.put('/:id', studentsController.updateStudent);

router.delete('/:id', studentsController.deleteStudent);


module.exports = router;