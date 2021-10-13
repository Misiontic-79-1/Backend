<template>
  <div
    class="modal fade"
    id="iniciarSesionModal"
    tabindex="-1"
    aria-labelledby="iniciarSesionModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content p-3">
        <div class="modal-header">
          <h3 class="text-primary">Inicia sesion</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="text-center">
              <a href="#">
                <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
              </a>
            </div>
            <div class="mb-3">
              <div id="ayudaCorreo" class="form-text">
                Ingresa tus datos para iniciar sessión
              </div>
              <label for="correo" class="form-label">Correo</label>
              <input
                type="email"
                class="form-control"
                id="correo"
                aria-describedby="ayudaCorreo"
              />
            </div>
            <div class="mb-3">
              <label for="contrasena" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="contrasena" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="recordar" />
              <label class="form-check-label" for="recordar">Recordarme</label>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn border text-primary border-primary border-1 rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#registroModal"
            >
              Registrarme
            </button>
            <button
              type="submit"
              class="btn btn-primary bg-primary rounded-pill"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <router-link
                to="/Dashboard"
                class="text-decoration-none text-white"
                >Iniciar sessión</router-link
              >
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Calendario",
};
</script>
<style scoped></style>
