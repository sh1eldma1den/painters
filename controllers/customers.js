const mongodb = require('../db/connections');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db('project2')
    .collection('customer_info')
    .find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
      next();
     res.status(200).json(lists);
        });
};

const getOne = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
      const result = await mongodb
      .getDb()
      .db('project2')
      .collection('customer_info')
      .find({ _id: userId});
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Type', 'application/json');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        next();
        res.status(200).json(lists[0]);
      });
};

const addOne = async (req, res) => {
  const customer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    birthDate: req.body.birthDate,
    email: req.body.email,
    classesTaken: req.body.classesTaken,
    ordersPlaced: req.body.ordersPlaced,
    subscribed: req.body.subscribed
  };
  if (firstName.isEmpty ||
      lastName.isEmpty ||
      address.isEmpty ||
      email.isEmpty) {
    return response.status(400).send('Missing required fields.');
  } else {
  const response = await mongodb
    .getDb()
    .db('project2')
    .collection('customer_info')
    .insertOne(customer);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'An error occurred while creating the customer.');
   }
  };
};

const updateOne = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const customer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    birthDate: req.body.birthDate,
    email: req.body.email,
    classesTaken: req.body.classesTaken,
    ordersPlaced: req.body.ordersPlaced,
    subscribed: req.body.subscribed
  };
  if({ _id: userId}.isEmpty) {
    return response.status(400).send('ID is required.');
  } if(!{ _id: userId}) {
    return response.status(404).send('No customer found with that ID.');
  } else {
    const response = await mongodb
      .getDb()
      .db('project2')
      .collection('customer_info')
      .replaceOne({_id: userId}, customer);
      console.log(response);
    if (response.modifiedCount > 0) {
     res.status(204).send();
    } else {
      res.status(500).json(response.error || 'An error occurred while updating the customer.');
    }
  };
};

const deleteOne = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  if({ _id: userId}.isEmpty) {
    return response.status(400).send('ID is required.');
  } if(!{ _id: userId}) {
    return response.status(404).send('No customer found with that ID.');
  } else {
    const response = await mongodb
      .getDb()
      .db('project2')
      .collection('customer_info')
      .deleteOne({_id: userId}, true);
      console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'An error occurred while deleting the artist.');
    }
  };
};


module.exports = { 
  getAll, 
  getOne,
  addOne,
  updateOne,
  deleteOne 
};