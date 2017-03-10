var datastore = require('./datastore');
var shortId = require('shortid');
// Get list of bookings
exports.list = function(req, res) {
  return res.status(200).json(datastore.bookings);
} ;
// Creates a new booking in datastore.
exports.create = function(req, res) {
	console.log(req.body);
  var booking = {
     id: shortId.generate(),
     customer_id: req.body.customer_id,
	 admin_id: req.body.admin_id,
     driver_id: req.body.driver_id,
     pickup_time: req.body.pickup_time, 
	 pickup_location: req.body.pickup_location,
	 destination: req.body.destination 
  };
  datastore.bookings.push(booking)
  return res.json(201, booking);
};

exports.update = function(req, res) {
    var index = datastore.bookings.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var booking = datastore.bookings[index]
       booking.customer_id =  req.body.customer_id
	   booking.admin_id =  req.body.admin_id
       booking.driver_id = req.body.driver_id
       booking.pickup_time = req.body.pickup_time
	   booking.pickup_location = req.body.pickup_location
	   booking.destination = req.body.destination
       return res.send(200, booking) 
    } else {
        return res.send(404)
    }
};
// delete an existing booking in datastore.
exports.delete = function(req, res) {
    var index = datastore.bookings.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var booking = datastore.bookings.splice(index,1);
       return res.send(200, booking) 
    } else {
        return res.send(404)
    }
};