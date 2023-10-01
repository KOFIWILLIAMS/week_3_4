const mongodb = require('../data/database');
const ObjectId =require('mongodb').ObjectId;

const getALL = async (req, res) => {
  // #swagger.tags=['students']
    const result = await mongodb.getDatabase().db().collection('students').find();
    result.toArray().then((students) => {
        res.setHeader('Content-Type','application/json');
        res.status(200).json(students);
    });
};

const getSingle = async (req, res) => {
  // #swagger.tags=['students']
    const StudentId =new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('students').find({_id: StudentId});
    result.toArray().then((students) => {
        res.setHeader('Content-Type','application/json');
        res.status(200).json(students[0]);
    });
};


const addStudent = async (req, res) => {
// #swagger.tags=['students']
    const Student = {
        name: req.body.name,
        school: req.body.school,
        class: req.body.class,
        subject: req.body.subject,
        year: req.body.year
      };

      const response = await mongodb.getDatabase().db().collection('students').insertOne(Student);
      if (response.acknowledged) {
        res.status(204).send();
      }else{
        res.status(500).json(response.error || 'Error occurred');
      }
};


const updateStudent = async (req, res) => {
  // #swagger.tags=['students']
    const StudentId =new ObjectId(req.params.id);
    const Student = {
        Studentname: req.body.Studentname,
        class: req.body.class,
        name: req.body.name,
        subject: req.body.subject,
      };

      const response = await mongodb.getDatabase().db().collection('students').replaceOne({_id: StudentId}, Student);
      if (response.modifiedCount > 0) {
        res.status(204).send();
      }else{
        res.status(500).json(response.error || 'Error occurred Updating');
      }
};



const deleteStudent = async (req, res) => {
  // #swagger.tags=['students']
    const StudentId =new ObjectId(req.params.id);

      const response = await mongodb.getDatabase().db().collection('students').deleteOne({_id: StudentId});
      if (response.deleteCount > 0) {
        res.status(204).send();
      }else{
        res.status(500).json(response.error || 'Error occurred Deleting');
      }
};


module.exports = {
    getALL,
    getSingle,
    addStudent,
    updateStudent,
    deleteStudent
};