var datastore = require('./datastore');
var shortId = require('shortid');
// Get list of customers
exports.list = function(req, res) {
  return res.status(200).json(datastore.customers);
} ;
// Creates a new customer in datastore.
exports.create = function(req, res) {
	console.log(req.body);
  var customer = {
     id: shortId.generate(),
     first_name: req.body.first_name,
	 last_name: req.body.last_name,
     address: req.body.address,
     phone_number: req.body.phone_number 
  };
  datastore.customers.push(customer)
  return res.json(201, customer);
};

exports.update = function(req, res) {
    var index = datastore.customers.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var customer = datastore.customers[index]
       customer.first_name =  req.body.first_name
	   customer.last_name =  req.body.last_name
       customer.address = req.body.address
       customer.phone_number = req.body.phone_number
       return res.send(200, customer) 
    } else {
        return res.send(404)
    }
};
// delete an existing customer in datastore.
exports.delete = function(req, res) {
    var index = datastore.customers.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var customer = datastore.customers.splice(index,1);
       return res.send(200, customer) 
    } else {
        return res.send(404)
    }
};