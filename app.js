const express         = require("express");
const bodyParser      = require("body-parser");
const mocha           = require("mocha");
const routes          = require("./routes/customers.js");
const app             = express();

app.use(routes);

if(require.main === module){
  app.listen(3000, function(){
    console.log("You are listening to port 3000 mane");
  });
}

module.exports = app;













app.get('/api/customer/items', function(req, res) {
//get a list of items//
};
app.get('api/customer/items', function(req, res) {
//GET /api/customer/items//
};
post.get('/api/customer/items/itemId/purchases')(req, res), {
//POST /api/customer/items/:itemId/purchases - purchase an item//
app.get('/api/vendor/purchases', function(req, res) {
//GET /api/vendor/purchases - get a list of all purchases with their item and date/time//
}
app.get('/api/vendor/money', function(req, res) {
//GET /api/vendor/money - get a total amount of money accepted by the machine//
}
post.get('/api/vendor/items', function(req, res) {
//POST /api/vendor/items - add a new item not previously existing in the machine//
}
put.get('/api/vendor/item/itemID', function(req, res) {
//PUT /api/vendor/items/:itemId - update item quantity, description, and cost//
}




