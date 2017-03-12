var mongo = require('mongodb');
var BSON = mongo.BSONPure;
// get mongo client
var mongoClient = mongo.MongoClient;
var mongoDb;
mongoClient.connect("mongodb://root:root@ds157799.mlab.com:57799/taxi_db", function(err, db) {
if(!err) {
  console.log("We are connected");
  mongoDb = db;
}
else
{
    console.log("Unable to connect to the db");
}
});

 // Connect to the db
    if (mongoDb){
      var collection = mongoDb.collection('contacts');
      collection.find().toArray(function(err, items) {
          res.send(items);
      });
    }
    else
    {
        console.log('No database object!');
    }
var datastore = require('./datastore');
var shortId = require('shortid');
// Get list of admins
exports.list = function(req, res) {
  return res.status(200).json(datastore.admins);
} ;
// Creates a new admin in datastore.
exports.create = function(req, res) {
	console.log(req.body);
  var admin = {
     id: shortId.generate(),
     first_name: req.body.first_name,
	 last_name: req.body.last_name,
     phone_number: req.body.phone_number 
  };
  datastore.admins.push(admin)
  return res.json(201, admin);
};

exports.update = function(req, res) {
    var index = datastore.admins.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var admin = datastore.admins[index]
       admin.first_name =  req.body.first_name
	   admin.last_name =  req.body.last_name
       admin.phone_number = req.body.phone_number
       return res.send(200, admin) 
    } else {
        return res.send(404)
    }
};
// delete an existing admin in datastore.
exports.delete = function(req, res) {
    var index = datastore.admins.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var admin = datastore.admins.splice(index,1);
       return res.send(200, admin) 
    } else {
        return res.send(404)
    }
};
