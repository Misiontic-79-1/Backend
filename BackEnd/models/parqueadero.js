import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const parqueaderoSchema = new Schema({
    nombre_usuario:String,
    contrasenia:String,
    nombre_parqueadero:String,
    nit:String,
    correo:String,
    direccion:String,
    ciudad:String,
    celular:Number,
    horario:String,
    valorHoraFraccion:Number,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

//


// Convertir a modelo
const parqueadero = mongoose.model("Parqueadero", parqueaderoSchema);

export default parqueadero;