const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getSingle = async (req, res) => {
    const userId = (req.params.id);
    const user = await mongodb.getDatabase().db().collection('users').findOne({ _id: new ObjectId(userId) });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(user);
    };


module.exports = {
    getAll,
    getSingle
};