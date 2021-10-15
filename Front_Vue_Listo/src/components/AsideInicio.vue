<template>
  <div
    class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 text-dark bg-white position-fixed w-15"
  >
    <div
      v-if="msg == 'Inicio'"
      class="d-flex flex-column justify-content-center align-items-center pt-2 text-white min-vh-100 d-none d-sm-block"
    >
      <a
        href="/"
        class="text-secondary nav-link d-flex justify-content-center"
        aria-current="page"
      >
        <img class=" p-2 w-80" src="../assets/svg/logo-app.svg" />
      </a>
      <hr class="bg-light opacity-100" />
      <ul class="nav nav-pills flex-column align-items-center" id="menu">
        <li class="nav-item mb-3">
          <a
            href="#"
            class="nav-link align-middle"
            data-bs-toggle="modal"
            data-bs-target="#iniciarSesionModal"
          >
            <span>Iniciar sesión</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="btn btn-primary bg-primary text-white rounded-pill mb-3 nav-link align-middle"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#registroModal"
          >
            <span>Registrame</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="btn btn-primary bg-primary text-white rounded-pill mb-3 nav-link align-middle"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#reserva1"
          >
            <span>Reservar</span>
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/Nosotros" class="nav-link align-middle mb-3"
            >Nosotros</router-link
          >
        </li>
      </ul>
    </div>
    <div
      v-if="msg == 'Dashboard'"
      class="d-flex flex-column justify-content-center align-items-center pt-2 text-white min-vh-100 d-none d-sm-block"
    >
      <a
        href="/Dashboard"
        class="text-secondary nav-link d-flex justify-content-center"
        aria-current="page"
      >
        <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
      </a>
      <hr class="bg-light opacity-100" />
      <ul class="nav nav-pills flex-column align-items-center" id="menu">
        <li class="nav-item mb-3">
          <a
            href="/Dashboard"
            class=" nav-link align-middle active"
            aria-current="page"
          >
            <span>Tablero principal</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/Reservas" class="nav-link align-middle mb-3">
            <span>Reservas</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link align-middle mb-3">
            <span>Estadísticas</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/config" class="nav-link align-middle mb-3">
            <span>Configuración</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/" class="text-danger nav-link align-middle mb-3">
            <span>Salir</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideInicio",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
