import mongoose from "mongoose";
const schema=mongoose.Schema;

const adminusuariosschema=new schema({

    nombre:  String,
    usuario: String,
    password:String,
    tipo: String

});


// convertir a modelo

const adminusuario = mongoose.model("adminusuario",adminusuariosschema);
export default adminusuario;