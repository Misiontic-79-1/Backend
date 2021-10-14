import mongoose from "mongoose";
const schema=mongoose.Schema;

const reservasschema=new schema({

    placa:String,
    cedula: String,
    celular:String,
    fecha:String,
    horaInicio:String,
    horaFin:String
});


// convertir a modelo

const reservas = mongoose.model("reservas",reservasschema);
export default reservas;