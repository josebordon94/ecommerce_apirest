const productsModel = require("../models/productsModel")
const categoryModel = require("../models/categoriesModel")
module.exports={
  getAll:async function(req, res, next) {
    try{
      let queryFind={}
      if(req.query.buscar){
        queryFind={name:{$regex:".*"+req.query.buscar+".*",$options:"i"}}
      }
      if(req.query.category){
        queryFind={category:req.query.category.toString()}
      }
      const products = await productsModel.find(queryFind).populate("category")
      .select("price name").sort({price:-1,name:1})
      res.json(products)
    }catch(e){
      next(e)
    }
  },
  getAllPaginate:async function(req, res, next) {
    try{
      let queryFind={}
      if(req.query.buscar){
        queryFind={name:{$regex:".*"+req.query.buscar+".*",$options:"i"}}
      }
      const products = await productsModel.paginate(queryFind,{
        sort:{name:1},
        populate:"category",
        limit:req.query.limit || 2,
        page: req.query.page || 1
      })
      res.json(products)
    }catch(e){
      next(e)
    }
  },
  getById:async function(req, res, next) {
    try{
      console.log(req.params)
      const producto = await productsModel.findById(req.params.id)
      res.json(producto)
    }catch(e){
      next(e)
    }
  },
  getByTagId:async function(req, res, next) {
    try{
      console.log(req.params)
      const producto = await productsModel.findOne({"tags._id":req.params.id})
      res.json(producto)
    }catch(e){
      next(e)
    }
  },
  create:async function(req, res, next) {
    try{
      const categoria = await categoryModel.findBydIdAndValidate(req.body.category);
      if(categoria.error){
        res.json(categoria);
        return;
      }
      const document = new productsModel({
        name:req.body.name,
        code:req.body.code,
        description:req.body.description,
        price:req.body.price,
        category:categoria._id,
        tags:req.body.tags
      })

      console.log("Se va a insertar: " + document)
      const response = await document.save()

      res.json(response)
    }catch(e){
      //e.status=200
      next(e)
    }

  },
  update:async function(req, res, next) {
    try{
      console.log(req.params)
      console.log(req.body)
      const producto = await productsModel.updateOne({_id:req.params.id},req.body)
      res.json(producto)
    }catch(e){
      //Manda email

      next(e)
    }
  },
  delete:async function(req, res, next) {
    try{
      console.log(req.params)
      const producto = await productsModel.deleteOne({_id:req.params.id})
      res.json(producto)
    }catch(e){
      next(e)
    }
  }

}