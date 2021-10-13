<template>
  <!-- reserva15min -->
  <div
    class="modal fade"
    id="registroModal1"
    tabindex="-1"
    aria-labelledby="registroModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content p-3">
        <div class="modal-header">
          <h3 class="text-primary">Has tu Reserva</h3>
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
              <div class="col-md-6 mb-3">
                <label for="registrarNombre" class="form-label"
                  >Placa del Vehiculo</label
                >
                <input
                  type="text"
                  id="registrarNombre"
                  class="form-control"
                  placeholder="Placa vehiculo"
                  v-model="nota.nombre"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="registrarCorreo" class="form-label">Contacto</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Celular"
                  v-model="nota.descripcion"
                />
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input text-left"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Recordarme</label
              ><br />
              <p class="text-primary">Recuerda llegar en 15 minutos habiles</p>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="submi"
              class="btn text-primary border border-primary border-1 rounded-pill"
            >
              Reservar
            </button>

            <a
              href="#"
              class="btn btn-primary bg-primary text-white rounded-pill mb-1 nav-link align-middle"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#reserva1"
            >
              <span>Cancelar</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reserva15min",

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
