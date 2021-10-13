<template>
    <div class="contenedor-panel-largo bg-white rounded-20 mt-4">
        <div id="Change" class="d-flex justify-content-end m-2">
            <ul id="selector">
              <li>VER</li>
              <li class="text-secondary"><i v-on:click="msg='Carro'" class="fas fa-car"></i></li>
              <li class="text-secondary"><i v-on:click="msg='Moto'" class="fas fa-motorcycle"></i></li>
            </ul>
        </div>
        <div v-if="msg=='Carro'" class="d-flex flex-wrap justify-content-center">
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
              <span class="id_parqueadero">1</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
              <span class="id_parqueadero">2</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
              <span class="id_parqueadero">3</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
              <span class="id_parqueadero">4</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_disponible">
              <span class="id_parqueadero">5</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">6</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">7</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">8</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">9</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">10</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">11</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">12</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">13</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">14</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_carro_ocupado">
              <span class="id_parqueadero">15</span>
            </div>
        </div>
        <div v-if="msg=='Moto'" class="d-flex flex-wrap justify-content-center">
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">1</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">2</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">3</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">4</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
              <span class="id_parqueadero">5</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">6</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">7</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">8</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">9</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">10</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">11</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">12</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">13</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">14</span>
            </div>
            <div class="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
              <span class="id_parqueadero">15</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:"PanelLargo",
  props:{
    msg: String
  }
}
</script>

<style scoped>

</style>
