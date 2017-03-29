var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://stephaniesorensen:mikhail4@localhost:3001/sandbox';
var massiveInstance = massive.connectSync({connectionString})
var controller = requre('./controller.js');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance)

controller.getPlanes();

// var db = app.get('db');

// db.new_plane(function(err,planes){
//   console.log(err, "plane added")
// });

// db.get_planes(function(err, planes){
//   console.log(err, planes)
// });



app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
});
