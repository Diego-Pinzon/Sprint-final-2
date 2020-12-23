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
   
        <!-- <li v-for="destination in destinations" :key="destination.name" class="links">
          <router-link :to="{
            name: 'DestinationDetails',
            params: {slug:destination.slug}
            }">
            {{destination.name}}
          </router-link>
        </li> -->

      <!-- <router-link to= "/contacto">Contacto</router-link> |
      <router-link to="/about">About</router-link> -->
  
    
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

