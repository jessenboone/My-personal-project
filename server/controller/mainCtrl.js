var app = require('./../index');
var db = app.get('db');


module.exports = {

  getCars: function(req, res, next) {
    db.get_cars([req.params.model], function(err, response) {
      console.log(err)
      console.log(response)
      res.status(200).send(response)
    })
  },

  getImages: function(req, res, next) {
    db.get_images([req.params.model], function(err, response) {
      console.log(err);
      console.log(response);
      res.status(200).send(response)
    })
  }





}
