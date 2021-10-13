<template>
  <div class="Dashboard">
      <aside-inicio msg="Dashboard"/>
      <navbar-inicio msg="Dashboard"/>
      <div class="margen-top col p-0 margen-left">
        <div class="d-flex flex-wrap px-4 py-5">
              <panel-corto msg="Date"/>
              <panel-corto msg="Carro"/>
              <panel-corto msg="Moto"/>
              <panel-corto msg="Placa"/>
              <panel-largo msg="Carro"/>
        </div>
      </div>
      <pie-pagina/>
  </div>
</template>
<script>
import AsideInicio from '@/components/AsideInicio.vue'
import NavbarInicio from '@/components/NavbarInicio.vue'
import PanelCorto from '@/components/PanelCorto.vue'
import PanelLargo from '@/components/PanelLargo.vue'
import PiePagina from '@/components/PiePagina.vue'
export default {
  name:"Dashboard",
  components: {
    AsideInicio,
    NavbarInicio,
    PiePagina,
    PanelCorto,
    PanelLargo
    },
};
</script>
