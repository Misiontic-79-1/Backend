<template>
  <div class="Nosotros">
    <aside-inicio msg="Inicio" />
    <navbar-inicio msg="Nosotros" />
    <pie-pagina />
    <iniciar-sesion />
    <registro-inicio />
    <div class="d-flex justify-content-center p-4 margen-top margen-left">
      <div class="p-4">
        <div class="d-flex text-center">
          <seccion-articulo msg="Yo Parqueo" />
          <seccion-articulo msg="Creadores" />
          <seccion-articulo msg="Actualizaciones" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideInicio from "@/components/AsideInicio.vue";
import IniciarSesion from "@/components/IniciarSesion.vue";
import NavbarInicio from "@/components/NavbarInicio.vue";
import PiePagina from "@/components/PiePagina.vue";
import RegistroInicio from "@/components/RegistroInicio.vue";
import RegistroReserva from "@/components/RegistroInicio.vue";
import SeccionArticulo from "@/components/SeccionArticulo.vue";

export default {
  name: "Nosotros",
  components: {
    AsideInicio,
    NavbarInicio,
    PiePagina,
    IniciarSesion,
    RegistroInicio,
    SeccionArticulo,
  },
};
</script>
