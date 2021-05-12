var express = require('express');
var router = express.Router();
const productsController = require("../controllers/productsController")

/* GET users listing. */
router.get('/', productsController.getAll);
router.get('/paginate', productsController.getAllPaginate);
router.get('/:id', productsController.getById);
router.post('/', productsController.create);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);
module.exports = router;
