var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
let dataBaseName = 'ecommerce';
let direccion = 'mongodb://localhost/' + dataBaseName
mongoose.connect(direccion, { useNewUrlParser: true }, function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a la base de datos ' + dataBaseName);
    }
});
mongoosePaginate.paginate.options={
    limit:1,
    lean:false
}
mongoose.mongoosePaginate = mongoosePaginate;
module.exports = mongoose;