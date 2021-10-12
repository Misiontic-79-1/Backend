import mongoose from "mongoose";
const schema=mongoose.Schema;

const usersschema=new schema({

    nombre:  String,
    usuario:String,
    email: String,
    password:String,
    celular: String

});


// convertir a modelo

const users = mongoose.model("users",usersschema);
export default users;