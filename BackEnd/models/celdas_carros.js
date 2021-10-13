import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const celdas_carrosSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, ref: 'parqueadero' },
    celdas_carros: String,
    valorHoraFraccion:String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

// Convertir a modelo
const celdasCarros = mongoose.model('celdasCarros', celdas_carrosSchema);

export default celdasCarros;