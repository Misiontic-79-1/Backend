import mongoose from "mongoose";
const schema=mongoose.Schema;

const reservasschema=new schema({

    usuario:String,
    placa: String,
    date:String,
    celular: String

});


// convertir a modelo

const reservas = mongoose.model("reservas",reservasschema);
export default reservas;