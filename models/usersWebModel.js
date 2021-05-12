const mongoose = require("../bin/mongodb");
const errorMessage=require("../util/errorMessage")
const validators=require("../util/validators")
const bcrypt = require('bcrypt');

const userWebSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    email:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    password:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator:function(v){
                return validators.isGoodPassword(v)
            },
            message:errorMessage.USERSWEB.passwordIncorrect
        }
    }
});
userWebSchema.pre("save",function(next){
    this.password=bcrypt.hashSync(this.password,10)
    next();
})
userWebSchema.statics.findBydIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"No existe usuario"
        }

    }
    return document;
}
module.exports = mongoose.model("usersWeb", userWebSchema)