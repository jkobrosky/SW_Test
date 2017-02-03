var TestModel = require('../models/TestModel');

module.exports = {

  createTest: function(req, res) {
    console.log('create req.body ', req.body);
    TestModel.find(req.query)
    .exec(function(err, result) {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.json(result);
      }
    })
    //return res.json("Good get");
  },

  postTest: function(req, res) {
    console.log('post req.body ', req.body);
    var newTest = new TestModel(req.body);
    newTest.save(function(err, result) {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.json(result);
      }
    })
    //return res.json('Good post')
  }

}
