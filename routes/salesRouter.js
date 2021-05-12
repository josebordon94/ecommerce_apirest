var express = require('express');
var router = express.Router();
const salesController = require("../controllers/salesController")
/* GET users listing. */
router.get('/', salesController.getAll);
router.post('/', salesController.create);
module.exports = router;
