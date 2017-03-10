var express = require('express');
var bodyParser = require('body-parser');
//create an express app
var app = express();

//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());

//add route for the root
app.get('/',function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("We're up and running!!!");
});
// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000)
//create routing objects
//customers.
var customer = require('./api/customers');
app.get('/api/customers',customer.list);
app.post('/api/customers',customer.create);
app.put('/api/customers/:id',customer.update);
app.delete('/api/customers/:id',customer.delete);

//admins.
var admin = require('./api/admins');
app.get('/api/admins',admin.list);
app.post('/api/admins',admin.create);
app.put('/api/admins/:id',admin.update);
app.delete('/api/admins/:id',admin.delete);

//drivers.
var driver = require('./api/drivers');
app.get('/api/drivers',driver.list);
app.post('/api/drivers',driver.create);
app.put('/api/drivers/:id',driver.update);
app.delete('/api/drivers/:id',driver.delete);

//bookings.
var booking = require('./api/bookings');
app.get('/api/bookings',booking.list);
app.post('/api/bookings',booking.create);
app.put('/api/bookings/:id',booking.update);
app.delete('/api/bookings/:id',booking.delete);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");