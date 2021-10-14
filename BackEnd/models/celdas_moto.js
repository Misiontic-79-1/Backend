var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Parqueadero = mongoose.model('Parqueadero');

var celdas_motoSchema = new Schema({
    id_celda:Number,
    valorHoraFraccion:{ type: Schema.Types.ObjectId, ref:'Parqueadero' },
    placa:String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
    celdas_moto: { type: Schema.Types.ObjectId, ref: 'Parqueadero' }
});

module.exports = mongoose.model("celdasMoto", celdas_motoSchema);