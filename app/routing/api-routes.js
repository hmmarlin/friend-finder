var matches = require('../data/friends.js');
var path = require('path');

module.exports = function(app) {
    app.get('/api/matches', function(req, res) {
        res.json(matches);
    });

  app.post('/api/matches', function(req,res){
          matches.push(req.body);
          res.json(true);
});
};