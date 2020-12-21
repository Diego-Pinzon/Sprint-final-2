<template>
  <v-app id="inspire">
    

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>DTrans4m</v-toolbar-title>
    </v-app-bar>
    <v-btn
        @click.prevent="GoLogin"
        target="_blank"
        text
      >
        <span class="mr-2 text--text">Iniciar sesión</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
     <v-card
      class="mx-auto"
      width="300"
    >
      <v-list>
        <v-list-item to= "Home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item @click="cerrarSesion">
          <v-list-item-icon>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Log Out</v-list-item-title>
        </v-list-item>
        <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title>Usuarios</v-list-item-title>
          </template>
  
          <v-list-group
            :value="true"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in admins"
              :key="i"
              :to="ruta"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
  
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in cruds"
              :key="i"
              :to="ruta"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>

      <router-view></router-view>
      </v-container>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
    drawer: null,
    admins: [
      ['Usuarios', 'mdi-account-multiple-outline' , 'Usuarios'],
      ['Configuracion', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Articulos', 'mdi-cart', 'Articulos'],
      ['Categorias', 'mdi-playlist-check', 'Categorias'],
    ],
  }),
  methods:{
        cerrarSesion(){
          localStorage.removeItem('token')
          localStorage.removeItem('usuario')
          swal("Exito!", "Ha cerrado sesión correctamente!", "success")
          this.$router.push('/')
        }
      },
};
</script>
