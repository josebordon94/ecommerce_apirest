//Controlador para manejar las ventas
//Para simplificar, cada venta solo se puede relacionar con un producto.

const productsModel = require("../models/productsModel")
const salesModel = require("../models/salesModel")
module.exports={
    getAll:async function(req, res, next) {
        try{
            const sales = await salesModel.find().populate("product")
            res.json(sales)
        }catch(e){
            next(e)
        }
    },

    create:async function(req, res, next) {
        try{
            const product = await productsModel.findBydIdAndValidate(req.body.product);
            if(product.error){
                res.json(product);
                return;
            }
            const document = new salesModel({
                code:req.body.code,
                product:product._id,
                quantity: req.body.quantity

            })

            console.log("Se va a insertar la siguiente venta: " + document)
            const response = await document.save()

            res.json(response)
        }catch(e){
            next(e)
        }
    }
}