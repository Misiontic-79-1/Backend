<template>
  <div class="item-panel mx-3 flex-grow-1 text-center rounded-20">
    <div
      v-if="msg == 'Date'"
      class="bg-white rounded-20 p-3 h-130 justify-content-center d-flex flex-column"
    >
      <div id="fecha"></div>
      <div class="fuente-reloj" id="reloj"></div>
    </div>
    <div
      v-if="msg == 'Carro'"
      class="bg-success text-white rounded-20 p-3 h-130 justify-content-center d-flex flex-column"
    >
      <div>Celdas disponibles Carro</div>
      <div class="fuente-vehiculo"><i class="fas fa-car"></i>9/15</div>
    </div>
    <div
      v-if="msg == 'Moto'"
      class="bg-info text-white rounded-20 p-3 h-130 justify-content-center d-flex flex-column"
    >
      <div>Celdas disponibles Moto</div>
      <div class="fuente-vehiculo"><i class="fas fa-motorcycle"></i>9/15</div>
    </div>
    <div
      v-if="msg == 'Placa'"
      class="bg-warning rounded-20 p-3 h-130 justify-content-center d-flex flex-column"
      id="placa"
    >
      <div class="ingresar-placa">
        <input
          type="text"
          id="consultar-placa"
          name="consultar-placa"
          required
          minlength=""
          maxlength=""
          size=""
          placeholder="Placa"
        />
      </div>
      <div>
        <a href="#"
          ><input
            class="btn btn-primary text-dark rounded-pill"
            id="Registrarme"
            type="button"
            value="Ingresar"
            data-bs-toggle="modal"
            data-bs-target="#ingresarModal"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
function actual() {
  var fecha = new Date(); //Actualizar fecha.
  var hora = fecha.getHours(); //hora actual
  var minuto = fecha.getMinutes(); //minuto actual
  var segundo = fecha.getSeconds(); //segundo actual
  if (hora < 10) {
    //dos cifras para la hora
    hora = "0" + hora;
  }
  if (minuto < 10) {
    //dos cifras para el minuto
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    //dos cifras para el segundo
    segundo = "0" + segundo;
  }
  //ver en el recuadro del reloj:
  var mireloj = hora + " : " + minuto + " : " + segundo;
  return mireloj;
}
function actual2() {
  var fecha = new Date();
  var sem = fecha.getDay();
  var dia = fecha.getDate();
  var mes = fecha.getUTCMonth();
  var año = fecha.getFullYear();
  switch (sem) {
    case 1:
      sem = "lunes";
      break;
    case 2:
      sem = "Martes";
      break;
    case 3:
      sem = "Miercoles";
      break;
    case 4:
      sem = "Jueves";
      break;
    case 5:
      sem = "Viernes";
      break;
    case 6:
      sem = "Sabado";
      break;
    case 7:
      sem = "Domingo";
      break;

    default:
      break;
  }
  if (dia < 10) {
    //dos cifras para la hora
    dia = "0" + dia;
  }
  switch (mes) {
    case 0:
      mes = "enero";
      break;
    case 1:
      mes = "febrero";
      break;
    case 2:
      mes = "marzo";
      break;
    case 3:
      mes = "abril";
      break;
    case 4:
      mes = "mayo";
      break;
    case 5:
      mes = "junio";
      break;
    case 6:
      mes = "julio";
      break;
    case 7:
      mes = "agosto";
      break;
    case 8:
      mes = "septiembre";
      break;
    case 9:
      mes = "octubre";
      break;
    case 10:
      mes = "nobiembre";
      break;
    case 11:
      mes = "diciembre";
      break;

    default:
      break;
  }
  var mifecha = sem + ", " + dia + " de " + mes + " de " + año;
  return mifecha;
}
function actualizar() {
  //función del temporizador
  var mihora = actual(); //recoger hora actual
  var mireloj = document.getElementById("reloj"); //buscar elemento reloj
  mireloj.innerHTML = mihora; //incluir hora en elemento
  var midate = actual2();
  var mifecha = document.getElementById("fecha");
  mifecha.innerHTML = midate;
}
setInterval(actualizar, 1000); //iniciar temporizador

export default {
  name: "PanelCorto",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
