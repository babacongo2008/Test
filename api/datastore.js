
exports.customers = [ 
 {id: 'a4vhAoFG', first_name: "John", last_name: "Doe", address: "1 Bank Lane", phone_number: "051-123456 "},
 {id: 'hwX6aOr7', first_name: "Ellen", last_name: "Biggs", address: "2 River Road", phone_number: "051-123457"},
 {id: 'HkmG6VvYl', first_name: "Ellen", last_name: "Biggs", address: "2 River Road", phone_number: "051-123457"}
]

exports.admins = [ 
 {id: 'rk27QNPFl', first_name: "John", last_name: "Doe", phone_number: "051-123456 "},
 {id: 'HkazaNwYe', first_name: "Ellen", last_name: "Biggs", phone_number: "051-123457"},
 {id: 'H1aNmVwFe', first_name: "Ellen", last_name: "Biggs", address: "2 River Road", phone_number: "051-123457"}
]

exports.drivers = [ 
 {id: 'BJNB7VwFl', first_name: "John", last_name: "Doe", license_plate: "ABCD123", car_make: "Nissan", car_model: "Rouge", car_type: "SUV", phone_number: "051-123456 "},
 {id: 'rkjHm4wtx', first_name: "John", last_name: "Doe", license_plate: "PQRS123", car_make: "Mercedes", car_model: "C", car_type: "Sedan", phone_number: "051-123456 "},
 {id: 'rkbI7Vvtl', first_name: "John", last_name: "Doe", license_plate: "LMNO123", car_make: "Toyota", car_model: "HIghlander", car_type: "VAN", phone_number: "051-123456 "}
]

exports.bookings = [ 
 {id: 'BJNB7VwFl', customer_id: "a4vhAoFG", admin_id: "rk27QNPFl", driver_id: "BJNB7VwFl", pickup_time: "2017-02-19 10:00 AM", pickup_location: "110 Parkway Forest Dr", destination: "Square One"},
 {id: 'rkjHm4wtx', customer_id: "hwX6aOr7", admin_id: "rk27QNPFl", driver_id: "rkjHm4wtx", pickup_time: "2017-02-19 10:00 AM", pickup_location: "30 Carabob ct", destination: "Town Centre"},
 {id: 'rkbI7Vvtl', customer_id: "HkmG6VvYl", admin_id: "HkazaNwYe", driver_id: "rkbI7Vvtl", pickup_time: "2017-02-19 10:00 AM", pickup_location: "Town centre", destination: "Airport"}
]
