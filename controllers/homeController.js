const productsModel = require("../models/productsModel")
const salesModel = require("../models/salesModel")

module.exports={
  //Funcion que muestra los cinco primeros productos de la colección
  index:async function(req, res, next) {
    productsModel.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }).limit(5);
  },
  show: function(req,res,next){
    productsModel.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.render('index', { title: 'E-Commerce API', data : result });
      }
    }).populate('category').limit(5);
  },
  showSales: async function(req, res, next){
    try{
      const sales = await salesModel.find().populate("product").limit(3)
      res.render('sales', { title: 'E-Commerce API', data : sales });
    }catch(e){
      next(e)
    }
  },
  showSales2: function(req,res,next){
    salesModel.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.render('sales', { title: 'E-Commerce API', data : result });
      }
    }).populate('product').limit(5);
  }
}