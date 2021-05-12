const mongoose = require("../bin/mongodb")
const errorMessage=require("../util/errorMessage")


const tagsSchema = new mongoose.Schema({
    name:String
})
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minlength:[3,errorMessage.GENERAL.minlength]
    },
    price:{
        type:Number,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        min:1,
        get: function(i){
            return i*1.21
        },
        /*set:function(i){
            return i*1.21
        }/*/
    },
    description:{
        type : String,
        required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    code:{
        type:String,
        unique: true,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        maxlength:[12,errorMessage.GENERAL.maxlength]
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    }
})

productSchema.statics.findBydIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"No existe el producto solicitado"
        }

    }
    return document;
}
productSchema.set("toJSON",{getters:true,setters:true,virtuals:true})
productSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model("products",productSchema)