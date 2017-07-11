const express     = require("express");
const router      = express.Router();
const app         = require("../app");

router.get("/api/customers/items", function(req,res){
  res.json({hello: "world"});
});


module.exports = router;