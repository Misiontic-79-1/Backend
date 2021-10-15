<template>
    <div class="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <h3 class="text-primary">Crea tu cuenta</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12 text-center mb-3">
                                <a href="#">
                                    <img class=" p-2 w-80" src="./../assets/svg/logo-app.svg" />
                                </a>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="registrarNombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="registrarNombre">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="registrarCorreo" class="form-label">Email</label>
                                <input type="email" class="form-control" id="registrarCorreo">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="registrarContrasena" class="form-label">Password</label>
                                <input type="password" class="form-control" id="registrarContrasena">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="confirmarContrasena" class="form-label">Confirmar contraseña</label>
                                <input type="password" class="form-control" id="confirmarContrasena">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="registrarCel" class="form-label">Celular</label>
                                <input type="text" class="form-control" id="registrarCel">
                            </div>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn text-primary border border-primary border-1 rounded-pill"
                        data-bs-dismiss="modal">Registrarme</button>
                        <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill">Iniciar sessión</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name:"RegistroInicio"
}
</script>
<style scoped>

</style>
