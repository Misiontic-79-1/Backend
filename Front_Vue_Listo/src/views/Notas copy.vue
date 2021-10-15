<template>
  <div class="Dashboard">
    <aside-inicio msg="Dashboard" />
    <navbar-inicio msg="Dashboard" />

    <div class="margen-top col p-0 margen-left">
      <div class="d-flex flex-wrap px-4 py-5">
        <panel-corto msg="Date" />
        <panel-corto msg="Carro" />
        <panel-corto msg="Moto" />
        <panel-corto msg="Placa" />
      </div>

      <h1>NOTAS</h1>

      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        {{ mensaje.texto }}
      </b-alert>
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

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id_cliente</th>
            <th scope="col">Placa_Vehiculo</th>
            <th scope="col">Contacto</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in notas" :key="index">
            <th scope="row">{{ item._id }}</th>
            <td>{{ item.nombre }}</td>
            <td>{{ item.descripcion }}</td>
            <td>
              <b-button class="btn-danger mx-2" @click="eliminarNota(item._id)"
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
  </div>
</template>

<script>
import AsideInicio from "@/components/AsideInicio.vue";
import NavbarInicio from "@/components/NavbarInicio.vue";
import PanelCorto from "@/components/PanelCorto.vue";
import PanelLargo from "@/components/PanelLargo.vue";
import PiePagina from "@/components/PiePagina.vue";

export default {
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
          this.nota.lunes = "";
          this.nota.martes = "";
          this.nota.miercoles = "";
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
