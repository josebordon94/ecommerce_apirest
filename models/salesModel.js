const mongoose = require("../bin/mongodb")
const errorMessage=require("../util/errorMessage")

const saleSchema = new mongoose.Schema({
    code:{
        type:String,
        unique: true,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        maxlength:[6,errorMessage.GENERAL.maxlength]
    },
    date: {type: Date, default: Date.now},
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"products"
    },
    quantity: Number
})
saleSchema.virtual("total").get(function(){
    return (this.product.price * this.quantity)
})
saleSchema.virtual("total-iva").get(function(){
    return (this.product.price * this.quantity *1.21)
})
saleSchema.set("toJSON",{getters:true,setters:true,virtuals:true})
saleSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model("sales",saleSchema)