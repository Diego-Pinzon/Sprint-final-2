<template>
  <v-app-bar app color="grey darken-3" dark flat hide-on-scroll>
    <router-link to="/"> 
      <v-img alt="Logo" transition="scale-transition" width="40"
      src="https://cdn.worldvectorlogo.com/logos/digital-marketing-institute-1.svg" />
    </router-link>
    <h1 class="display-2 font-weight-bold m-3">
    DTrans4m
    </h1>

    <v-spacer></v-spacer> 

      <router-link to="/contacto">
      <v-btn
      
        color="grey darken-3"
        depressed
      >
       Contacto
      </v-btn>
      </router-link> 

    <router-link to="/login" class="routerlink"> 
      <v-btn
        outlined
        color="white"
      >
       Login
        <v-icon right>mdi-open-in-new</v-icon>
      </v-btn>
      
    </router-link> 

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-navigation-drawer
          v-model="drawer"
          :clipped="$vuetify.breakpoint.lgAndUp"
          app
          temporary
        >
    <v-card
      class="mx-auto"
      width="300"
    >
          <v-list dense>
            <template v-if="logueado">
              <v-list-group>
                <v-list-item slot="activator">
                  <v-list-item-content>
                    <v-list-item-title> Servicios </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'categoria' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Categorías </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'articulo' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Artículos </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-group>
                <v-list-item slot="activator">
                  <v-list-item-content>
                    <v-list-item-title> Accesos </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'usuario' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Usuarios </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </template>
          </v-list>
    </v-card>
    </v-navigation-drawer>    
        
  
    
  </v-app-bar>
  
</template>

<script>
import products from "@/products.js";
export default {
  data(){
    return {
      categorias: products.categorias
    }
  }
}
</script>

