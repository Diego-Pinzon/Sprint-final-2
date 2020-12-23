<template>
  <v-container>
    <v-layout>
      <v-flex>
      <span class="display-2  back font-weight-black">
        Servicios
      </span>
        <v-card class="mt-8 elevation-23"> 
          <v-carousel cycle>
            <v-carousel-item
              v-for="categoria in categorias"
              :key="categoria.name"
              :src="require(`@/assets/${categoria.image}`)"
              reverse-transition="fade-transition"
              transition="fade-transition"
              :tag="categoria.slug"
              
              :to="{
               name: 'Services',
               params: { categoriaSlug: categoria.slug}
            }"            
              >
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3 blue-grey lighten-4 pa-5 ma-2" >
                  <span class="teal darken-4--text font-weight-black"> {{categoria.name}} </span>
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import products from "@/products.js"

export default {
    name: 'TheServices',
    data() {
 
       return {
         categorias: products.categorias
    };
  },
   props: {
      slug: {
         type: String,
         required: true
      }
   },
   computed:{
      categoria(){
         return store.categorias.find(
            categoria => categoria.slug === this.slug
         )
      }
   }
}

</script>