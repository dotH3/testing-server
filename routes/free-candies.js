const { Router, response, request } = require("express");
const { getCandy } = require("../controllers/free-candies");
const router = Router();

router.get('/',getCandy);

module.exports=router