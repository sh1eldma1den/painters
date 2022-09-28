const mongodb = require('../db/connections');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection("post_modern")
    .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getOne = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("post_modern")
    .find({ _id: userId});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const addOne = async (req, res) => {
  const artist = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthPlace: req.body.birthPlace,
    birthDate: req.body.birthDate,
    nationality: req.body.nationality,
    education: req.body.education,
    movements: req.body.movements
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('post_modern')
    .insertOne(artist);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred while creating the artist.');
  }
};

const updateOne = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const artist = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthPlace: req.body.birthPlace,
    birthDate: req.body.birthDate,
    nationality: req.body.nationality,
    education: req.body.education,
    movements: req.body.movements
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('post_modern')
    .replaceOne({_id: userId}, artist);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while updating the artist.');
  }
};

const deleteOne = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection('post_modern')
    .deleteOne({_id: userId}, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while deleting the artist.');
  }
};

module.exports = { 
  getAll, 
  getOne,
  addOne,
  updateOne,
  deleteOne 
};