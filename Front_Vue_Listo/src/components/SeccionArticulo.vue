<template>
    <section class="w-50 h-500 p-4 bg-white mx-3 shadow-lg rounded-4">
        <h4 class="text-primary p-3">{{msg}}</h4>
        <p v-if="msg == 'Yo Parqueo'">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, dignissimos non a perferendis eum magnam nisi modi cupiditate? Ad, dicta odio odit delectus rerum accusamus id iusto consequuntur. Neque, velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eveniet quis atque, tempora incidunt impedit magnam aut nam ut. Iure, nam nisi. Libero asperiores, debitis sunt soluta nisi sit nihil?
        </p>
        <table v-if="msg =='Creadores'">
            <tbody>
                <tr>
                    <td><img class="rounded-circle" src="./../assets/img/imagen-creador.png" alt="Creador"></td>
                    <td>
                        <div class="text-start">Nombre completo</div>
                        <div class="text-start">Cargo</div>
                        <div class="text-start"><a href="https://github.com" class="text-decoration-none"><i class="fab fa-github"></i> Github</a></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td><img class="rounded-circle" src="./../assets/img/imagen-creador.png" alt="Creador"></td>
                    <td>
                        <div class="text-start">Nombre completo</div>
                        <div class="text-start">Cargo</div>
                        <div class="text-start"><a href="#" class="text-decoration-none"><i class="fab fa-github"></i> Github</a></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td><img class="rounded-circle" src="./../assets/img/imagen-creador.png" alt="Creador"></td>
                    <td>
                        <div class="text-start">Nombre completo</div>
                        <div class="text-start">Cargo</div>
                        <div class="text-start"><a href="#" class="text-decoration-none"><i class="fab fa-github"></i> Github</a></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td><img class="rounded-circle" src="./../assets/img/imagen-creador.png" alt="Creador"></td>
                    <td>
                        <div class="text-start">Nombre completo</div>
                        <div class="text-start">Cargo</div>
                        <div class="text-start"><a href="#" class="text-decoration-none"><i class="fab fa-github"></i> Github</a></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
            </tbody>
        </table>
        <articulo v-if="msg == 'Actualizaciones'">
            <div class="overflow-auto h-400">
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
                <div>
                    <p>05/10/2021</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse consectetur</p>
                </div>
            </div>
        </articulo>
    </section>
</template>

<script>
export default {
  name:"SeccionArticulo",
  props: {
      msg: String,
  }
}
</script>

<style scoped>

</style>
