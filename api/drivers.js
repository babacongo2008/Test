var datastore = require('./datastore');
var shortId = require('shortid');
// Get list of drivers
exports.list = function(req, res) {
  return res.status(200).json(datastore.drivers);
} ;
// Creates a new driver in datastore.
exports.create = function(req, res) {
	console.log(req.body);
  var driver = {
     id: shortId.generate(),
     first_name: req.body.first_name,
	 last_name: req.body.last_name,
     license_plate: req.body.license_plate,
	 car_make: req.body.car_make,
	 car_model: req.body.car_model,
	 car_type: req.body.car_type,
     phone_number: req.body.phone_number
  };
  datastore.drivers.push(driver)
  return res.json(201, driver);
};

exports.update = function(req, res) {
  console.log('updating driver...');
  console.log(req.params);
    var index = datastore.drivers.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var driver = datastore.drivers[index]
       driver.first_name =  req.body.first_name
	   driver.last_name =  req.body.last_name
       driver.license_plate = req.body.license_plate
	   driver.car_make = req.body.car_make
	   driver.car_model = req.body.car_model
	   driver.car_type = req.body.car_type
       driver.phone_number = req.body.phone_number
       return res.send(200, driver) 
    } else {
        return res.send(404)
    }
};
// delete an existing driver in datastore.
exports.delete = function(req, res) {
    var index = datastore.drivers.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var driver = datastore.drivers.splice(index,1);
       return res.send(200, driver) 
    } else {
        return res.send(404)
    }
};