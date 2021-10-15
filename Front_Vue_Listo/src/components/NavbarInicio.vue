<template>
  <div>
    <nav v-if="msg == 'Inicio'" class="margen-left navbar navbar-custom border-top border-5 border-secondary bg-white navbar-expand-lg navbar-light position-fixed w-85">
        <div class="container-fluid fw-bold">
            <ul class="navbar-nav p-2">
                <li class="nav-item">
                    <span class="nav-link"><img src="./../assets/img/icono-parqueadero.png" /> Parqueaderos disponibles</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link"><img src="./../assets/img/icono-carro.png" /> Tu ubicacion actual
                    </span>
                </li>
            </ul>
            <form class="d-flex align-items-bet flex-grow-1">
                <input class="form-control me-2 rounded-pill" type="search" placeholder="Ingresa una dirección"
                  aria-label="Search">
                <button class="btn btn-primary bg-primary text-white rounded-circle" type="submit"><i
                  class="fas fa-search"></i></button>
            </form>
        </div>
    </nav>
    <nav v-if="msg == 'Nosotros'" class="margen-left navbar navbar-custom border-top border-5 border-secondary bg-white navbar-expand-lg navbar-light position-fixed w-85">
        <div class="container-fluid fw-bold">
            <ul class="navbar-nav p-2 d-flex align-items-center">
                <li class="nav-item">
                  <span class="nav-link"> ¿Quienes somos? </span>
                </li>
            </ul>
            <ul class="navbar-nav p-2">
              <li class="nav-item text-primary p-2" ><i class="fab fa-facebook"></i></li>
              <li class="nav-item text-primary p-2" ><i class="fab fa-github"></i></li>
              <li class="nav-item text-primary p-2" ><i class="fab fa-twitter"></i></li>
              <li class="nav-item text-primary p-2" ><i class="fab fa-instagram"></i></li>
            </ul>
        </div>
    </nav>
    <nav v-if="msg == 'Dashboard'" class="margen-left navbar navbar-custom bg-secondary navbar-expand-lg navbar-dark position-fixed w-85">
        <div class="container-fluid fw-bold">
          <ul class="navbar-nav p-2">
              <li class="nav-item">
                <span class="nav-link text-white"><img src="./../assets/img/icono-parqueadero.png" /> Nombre Parqueadero
                </span>
              </li>
          </ul>
          <div class="d-flex align-items-end text-dark">
              <span> Nombre de Usuario <i class="fas fa-user-cog"></i></span>
          </div>
        </div>
    </nav>
    <nav v-if="msg=='Config'">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-config_par-tab" data-bs-toggle="tab" data-bs-target="#nav-config_par" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Configuracion de parqueadero</button>
        <button class="nav-link" id="nav-config_user-tab" data-bs-toggle="tab" data-bs-target="#nav-config_user" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Configuracion de usuario</button>
        </div>
    </nav>
  </div>
</template>
<script>
export default {
    name: "NavbarInicio",
    props: {
      msg: String
    }
}
</script>
<style scoped>

</style>
