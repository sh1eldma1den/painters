const mongodb = require('../db/connections');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
  mongodb
    .getDb()
    .db('project2')
    .collection('customer_info')
    .find()
    .toArray((err, lists) => {
      if(err) {
        res.status(400).json({message: err});
      }
      res.setHeader('Content-Type', 'application/json');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
      res.status(200).json(lists);
    });
};

const getOne = (req, res) => {
  if (!ObjectId.isValid(req.params.id)){
    res.status(400).json('Must be a valid customer ID.');
  }
  const userId = new ObjectId(req.params.id);
    mongodb
      .getDb()
      .db('project2')
      .collection('customer_info')
      .find({ _id: userId})
      .toArray((err, lists) => {
        if(err) {
          res.status(400).json({message: err});
        }
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

const updateOne = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)){
    res.status(400).json('Must be a valid customer ID.');
  }
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

const deleteOne = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)){
    res.status(400).json('Must be a valid customer ID.');
  }
  const userId = new ObjectId(req.params.id);
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


module.exports = { 
  getAll, 
  getOne,
  addOne,
  updateOne,
  deleteOne 
};