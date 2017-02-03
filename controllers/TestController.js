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
    });
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
    });
    //return res.json('Good post')
  },

  updateTest: function(req, res) {
    TestModel.findOneAndUpdate({ "name": req.body.name }, { "name": req.body.newName }, function(err, result) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    })
  },

  deleteTest: function(req, res) {
    console.log(req.body.name);
    TestModel.findOneAndRemove({ "name": req.body.name }, function(err, result) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    });
  }

}
