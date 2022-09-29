const mongodb = require('../db/connections');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection('class_info')
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
    .collection('class_info')
    .find({ _id: userId});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const addOne = async (req, res) => {
  const class_info = {
    className: req.body.className,
    classDate: req.body.classDate,
    classTime: req.body.classTime,
    classLevel: req.body.classLevel,
    suppliesIncluded: req.body.suppliesIncluded
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('class_info')
    .insertOne(class_info);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred while creating the class.');
  }
};

const updateOne = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const class_info = {
    className: req.body.className,
    classDate: req.body.classDate,
    classTime: req.body.classTime,
    classLevel: req.body.classLevel,
    suppliesIncluded: req.body.suppliesIncluded
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('class_info')
    .replaceOne({_id: userId}, class_info);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while updating the class.');
  }
};

const deleteOne = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection('class_info')
    .deleteOne({_id: userId}, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while deleting the class.');
  }
};

module.exports = { 
  getAll, 
  getOne,
  addOne,
  updateOne,
  deleteOne 
};