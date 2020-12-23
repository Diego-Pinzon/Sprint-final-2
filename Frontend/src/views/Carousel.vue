<template>
  <v-container>
    <v-layout>
      <v-flex>
          <h2 class="headline font-weight-bold mb-3">
          Servicios
        </h2>
        <v-carousel>
          <v-carousel-item
            v-for="categoria in categorias"
            :key="categoria.name"
            :src="require(`@/assets/${categoria.image}`)"
            :interval="5000"
            reverse-transition="fade-transition"
            transition="fade-transition"
            :tag="categoria.slug"
            :href="categoria.slug"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import products from "@/products.js"

export default {
    name: 'servicios',
}
</script>