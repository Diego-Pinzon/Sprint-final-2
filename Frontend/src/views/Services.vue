<template>
  <v-container>
    <v-layout>
      <v-flex>
        <section class="categoria">
        <!-- <span class="teal darken-4--text font-weight-black"> </span> -->
          <h1> {{ categoria.name}} </h1>
            
          <div class="service-details">
              
              <img :src="require(`@/assets/${categoria.image}`)" :alt="categoria.name">
              <h2>{{categoria.title}}</h2>
              <p>
              {{categoria.description}}
              </p>
          </div>
          </section>

        
        <GoBack />

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import products from "@/products.js"
import GoBack from "@/components/GoBack"
  export default {
    components: {
      GoBack
    },
    data(){
      return {  slug:this.$route.params.slug  }
    },
    props: {
        slug: {
          type: String,
          required: true
        }
    },
    computed:{
      categoria() {
        return products.categorias.find(
          categoria => categoria.slug === this.slug
      )
      }
    }
  
  }
</script>

<style scoped>
img {
   max-width: 600px;
   height: auto;
   width: 100%;
   max-height: 400px;
}
.service-details {
   display: flex;
   justify-content: space-between;
}
.cards {
   display: flex;
   justify-content: space-between;
}
.cards img {
   max-height: 200px;
   width: auto;
}
.card {
   padding: 0 20px;
   position: relative;
}
.card__text {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: white;
   font-size: 25px;
   font-weight: bold;
   text-decoration: none;
}
p {
   margin: 0 40px;
   font-size: 20px;
   text-align: left;
}

</style>