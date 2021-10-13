<template>
  <div class="tab-content bg-white rounded-4 h-400" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-config_par"
      role="tabpanel"
      aria-labelledby="nav-config_par-tab"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto
        perspiciatis, dolorum praesentium voluptatem quasi animi provident
        repudiandae corrupti eos est aliquam ex in sit hic et cumque beatae
        magni!
      </p>
    </div>
    <div
      class="tab-pane fade p-3"
      id="nav-config_user"
      role="tabpanel"
      aria-labelledby="nav-config_user-tab"
    >
      <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
        <h3>Editar nota</h3>
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="notaEditar.nombre"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Descripcion"
          v-model="notaEditar.descripcion"
        />
        <b-button class="btn-success my-2" type="submit">Editar</b-button>
        <b-button class="btn-sm  my-2" @click="editar = false"
          >Cancelar</b-button
        >
      </form>

      <form @submit.prevent="agregarNota(nota)" v-if="!editar">
        <h3>Agregar placa</h3>
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="nota.nombre"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Descripcion"
          v-model="nota.descripcion"
        />

        <b-button class="btn-success my-2" type="submit">Agregar</b-button>
      </form>

      <div class="h-350 p-2 overflow-auto">
        <table class="table table-hover m-0 text-center">
          <thead class="table-secondary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Usuario</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Tipo de usuario</th>
              <th scope="col">Accioin</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in notas" :key="index">
              <th scope="row">{{ item.nombre }}</th>
              <td>{{ item.nombre }}</td>
              <td>{{ item.descripcion }}</td>
              <td>*************</td>
              <td>Administrador</td>
              <td>
                <b-button
                  class="btn-danger mx-2"
                  @click="eliminarNota(item._id)"
                  >Eliminar</b-button
                >
                <b-button
                  class="btn-warning mx-2"
                  @click="activarEdicion(item._id)"
                  >Editar</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-end">
        <button
          type="submit"
          class="btn btn-primary bg-primary text-white rounded-pill"
          data-bs-toggle="modal"
          data-bs-target="#Agregar"
        >
          Agregar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfigPanel",

  data() {
    return {
      notas: [],
      nota: { nombre: "", descripcion: "" },
      agregar: true,
      editar: false,
      notaEditar: {},

      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
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
<style scoped></style>
