<template>
  <div class="Configuracion">
    <aside-inicio msg="Dashboard" />
    <navbar-inicio msg="Dashboard" />
    <div class="margen-top col p-0 margen-left">
      <div class="d-flex justify-content-center">
        <div class="w-85">
          <navbar-inicio msg="Config" />
          <config-panel />
        </div>
      </div>
    </div>
    <pie-pagina />
  </div>
</template>

<script>
import AsideInicio from "@/components/AsideInicio.vue";
import NavbarInicio from "@/components/NavbarInicio.vue";
import PiePagina from "@/components/PiePagina.vue";
import ConfigPanel from "@/components/ConfigPanel.vue";
export default {
  name: "Config",
  components: {
    AsideInicio,
    NavbarInicio,
    PiePagina,
    ConfigPanel,
  },
};
</script>

<style scoped></style>
