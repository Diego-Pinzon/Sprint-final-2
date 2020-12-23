<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h2 class="headline font-weight-bold mb-3">
          Servicios
        </h2>

        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import products from "@/products.js"

  export default {
    name: "services",
    data() {
      return {
        categorias: products.categorias
      };
    }
  
  }
</script>