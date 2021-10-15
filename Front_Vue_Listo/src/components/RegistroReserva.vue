<template>
  <!-- reserva -->
  <div
    class="modal fade"
    id="reserva1"
    tabindex="-1"
    aria-labelledby="iniciarSesionModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content p-3">
        <div class="modal-header">
          <h3 class="text-primary">Reserva tu Parqueadero</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="d-grid gap-3 d-md-block">
          <button
            data-bs-toggle="modal"
            data-bs-target="#registroModal1"
            class="btn btn-outline-primary bg-primary text-white"
            type="button"
            style="height:78px;width: 350px;margin-top:10px"
          >
            Reserva parcial si estas a 15 minutos de llegada
          </button>
          <button
            class="btn btn-outline-warning"
            type="button"
            style="height:78px;width: 350px;margin-top:10px margin-botton:10px"
            data-bs-toggle="modal"
            data-bs-target="#registroModal2"
          >
            Reserva total dia y hora de llegada
          </button>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn btn-primary bg-primary text-white rounded-pill"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegistroReserva",
};
</script>
<style scoped></style>
