const baseController = {}
// const data = require("../user.json")
const mongodb = require('../db/connect');

baseController.getData = async function(req, res) {
    // res.status(200).json(data[0]);
    const result = await mongodb.getDb().db().collection('people').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        console.log(lists)
        res.status(200).json(lists);
    });
}

module.exports = baseController