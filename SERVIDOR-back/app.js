import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();

//conecxion a base de datos

const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/prueba";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Or using promises
mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a DB");
  },
  (err) => {
    console.log(err);
  }
);

// Middleware

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas

app.use("/api", require("./routes/nota"));

const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), function () {
  console.log("Escuchando por el puerto " + app.get("puerto"));
});
