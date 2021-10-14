var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var parqueaderoSchema = new Schema({
    usuario:String,
    password:String,
    nombre_parqueadero:String,
    nit:String,
    correo:String,
    direccion:String,
    ciudad:String,
    celular:Number,
    horario:String,
    valorHoraFraccion:Number,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
    celdas_carro:Number,
    celdas_moto:Number,
});

//


module.exports = mongoose.model("Parqueadero", parqueaderoSchema);