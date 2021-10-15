<template>
  <!-- reserva15min -->
  <div
    class="modal fade"
    id="registroModal3"
    tabindex="-1"
    aria-labelledby="registroModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content p-3">
        <div class="modal-header">
          <h3 class="text-primary">Calendario</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <form @submit.prevent="agregarNota(nota)" v-if="!editar">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12 text-center mb-3">
                <a href="#">
                  <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
                </a>
              </div>
            </div>
            <!-- calendario -->
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=America%2FBogota&showNav=0&showPrint=0&showTabs=1&showTitle=0&showCalendars=0&showTz=0&mode=WEEK&src=anBqZmw2MHQ3ZmtlNG9tdW4xdmRnMWNlbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E4C441"
              style="border:solid 1px #777"
              width="700"
              height="600"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
          <div class="modal-footer justify-content-center">
            <a
              href="#"
              class="btn btn-primary bg-primary text-white rounded-pill mb-1 nav-link align-middle"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#reserva1"
            >
              <span>Cerrar</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
// src = "js/bootstrap-datetimepicker.min.js";
// type =
//   "text/javascript" >
//   $("#datetime").datetimepicker({
//     format: "yyyy-mm-dd hh:ii",
//   });
export default {
  name: "Calendario",

  data() {
    return {
      notas: [],
      nota: { nombre: "", descripcion: "" },
      agregar: true,
      editar: false,
      //   listarNotas: false,
      notaEditar: {},

      mensaje: { color: "success", texto: "" },
      dismissSecs: 3,
      dismissCountDown: 0,
    };
  },
  created() {
    this.listarNotas();
  },
  methods: {
    listarNotas() {
      this.axios
        .get("nota")

        .then((res) => {
          console.log(res.data);
          this.notas = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    agregarNota() {
      this.axios
        .post("/nota-nueva", this.nota)
        .then((res) => {
          this.notas.unshift(res.data);
          this.nota.nombre = "";
          this.nota.descripcion = "";
          this.showAlert();
          this.mensaje.color = "success";
          this.mensaje.texto = "Nota agregada";
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    eliminarNota(id) {
      this.axios
        .delete(`nota/${id}`)
        .then((res) => {
          let index = this.notas.findIndex((item) => item._id === res.data._id);
          this.notas.splice(index, 1);
          this.showAlert();
          this.mensaje.color = "darger";
          this.mensaje.texto = "Nota eliminada";
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      this.axios
        .get(`nota/${id}`)
        .then((res) => {
          this.notaEditar = res.data;
        })

        .catch((e) => {
          console.log(e.response);
        });
    },

    editarNota(item) {
      this.axios
        .put(`/nota/${item._id}`, item)
        .them((res) => {
          const index = this.notas.findIndex((n) => n._id === res.data._id);
          this.notas[index].nombre = res.data.nombre;
          this.notas[index].descripcion = res.data.descripcion;
          this.showAlert();
          this.mensaje.color = "darger";
          this.mensaje.texto = "Nota Editada";
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style></style>
