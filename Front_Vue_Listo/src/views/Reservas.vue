<template>
  <div class="Dashboard">
    <aside-inicio msg="Dashboard" />
    <navbar-inicio msg="Dashboard" />
    <Calendario />

    <div class="margen-top col p-0 margen-left">
      <div class="d-flex flex-wrap px-4 py-5">
        <panel-corto-Reservas msg="Date" />
        <panel-corto-Reservas msg="Carro" />
        <panel-corto-Reservas msg="Moto" />
        <panel-corto-Reservas msg="calendario" />
      </div>
      <div class="contenedor-panel-largo bg-white rounded-20 mt-4">
        <h1>Reservas</h1>

        <scroll-container class="pt-0 " style="width: 100% ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id_cliente</th>
                <th scope="col">Placa_Vehiculo</th>
                <th scope="col">Contacto</th>
                <th scope="col">Fecha_Hora</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(item, index) in notas" :key="index">
                <th scope="row">{{ item.usuarioId }}</th>
                <td>{{ item.nombre }}</td>
                <td>{{ item.descripcion }}</td>
                <td>{{ item.date }}</td>
              </tr>
            </tbody>
          </table>
        </scroll-container>
      </div>
    </div>

    <pie-pagina />
  </div>
</template>

<script>
import AsideInicio from "@/components/AsideInicio.vue";
import PanelCortoReservas from "@/components/PanelCortoReservas.vue";
import PanelLargo from "@/components/PanelLargo.vue";
import Calendario from "@/components/Calendario.vue";
import NavbarInicio from "@/components/NavbarInicio.vue";
import PiePagina from "@/components/PiePagina.vue";

export default {
  name: "Reservas",
  components: {
    PiePagina,
    AsideInicio,
    NavbarInicio,
    Calendario,

    PanelCortoReservas,
  },
  data() {
    return {
      notas: [],
      nota: { nombre: "", descripcion: "" },
      agregar: true,
      editar: false,
      cuerpo: true,
      notaEditar: {},

      //   mensaje: { color: "success", texto: "" },
      //   dismissSecs: 5,
      //   dismissCountDown: 0,
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
  },
};
</script>

<style>
scroll-container {
  display: block;
  width: 400px;
  height: 320px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200%;
  font-size: 5em;
}

table,
th,
td {
  border: 1px solid black;
}
</style>
