const request         = require("supertest");
const assert          = require("assert");
const app             = require("../app");
const mongoose        = require("mongoose")
const nodeEnv         = process.env.NODE_ENV || "test";
const config          = require("../config.json")[nodeEnv];
mongoose.Promise      = require("bluebird");

before("connect to Mongo", function (done) {
  mongoose.connect(config.mongoURL).then(done);
});

after("drop database", function (done) {
  mongoose.connection.dropDatabase(done);
});

describe("GET /customerItems", function () {
  it("should return successfully", function (done) {
    request(app)
      .get("/api/customers/items")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })


  it("should return successfully", function (done) {
    request(app)
      .get("/api/customers/items")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })

});

//tests  coins.

// A customer should not be able to buy items that are not in the machine, but instead get an error

// A vendor should be able to see total amount of money in machine

// A vendor should be able to see a list of all purchases with their time of purchase

// A vendor should be able to update the description, quantity, and costs of items in the machine

// A vendor should be able to add a new item to the machine

// Note that this API does not require authentication.

// API specification  

// All responses from the API should be an object with a "status" key and a "data" key. Successful 
// actions will have a status of "success" and failed actions will have a status of "fail." 
// The "data" key will hold whatever output data is necessarygo here
// A customer should be able to get a list of the current items, their costs, and quantities of those items
// A customer should be able to buy an item using money

// A customer should be able to buy an item, paying more than the item is worth (imagine putting a dollar
//  in a machine for a 65-cent item) and get correct change. This change is just an amount, not the actual 
//coins.

//A customer should not be able to buy items that are not in the machine, but instead get an error

// A vendor should be able to see total amount of money in machine

// A vendor should be able to see a list of all purchases with their time of purchase

// A vendor should be able to update the description, quantity, and costs of items in the machine

// A vendor should be able to add a new item to the machine

// Note that this API does not require authentication.

// All responses from the API should be an object with a "status" key and a "data" key. Successful actions will have a status of "success" and failed actions will have a status of "fail." The "data" key will hold whatever output data is necessary.

// Example: a customer gets a list of items

// {
//   "status": "success",
//   "data": [
//     {
//       "id": 1,
//       "description": "Corn chips",
//       "cost": 65,
//       "quantity": 4
//     },
//     {
//       "id": 2,
//       "description": "Gum",
//       "cost": 35,
//       "quantity": 10
//     },
    
//   ]
//}