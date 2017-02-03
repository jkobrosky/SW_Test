module.exports = {

  createTest: function(req, res) {
    console.log('create req.body ', req.body);
    return res.json("Good get");
  },

  postTest: function(req, res) {
    console.log('post req.body ', req.body);
    return res.json('Good post')
  }

}
