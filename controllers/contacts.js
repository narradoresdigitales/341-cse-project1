const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const userId = (req.params.id);
    const contact = await mongodb.getDatabase().db().collection('contacts').findOne({ _id: new ObjectId(userId) });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact);
    };


module.exports = {
    getAll,
    getSingle
};