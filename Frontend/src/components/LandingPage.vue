<template>
  <v-container class="back">
    
    <v-row class="text-center">
      
      <v-col class="mb-4">
        <v-parallax src="https://i.imgur.com/eozcQoz.jpg">
        <h1 class="display-2 font-weight-bold prymary mb-3" color>
          Bienvenido a DTrans4m
        </h1>

        <p class="subheading font-weight-bold" >
          ¿Estás preparado para unirte a la revolución digital?,
          <br>los tiempos han cambiado y los habitos de consumo también...
          <br>Tu negocio no se puede quedar atrás.
          <br>
          <br>A continuación te presentamos nuestros servicios, si estás interesado envianos tus datos y agendaremos una asesoría gratuita para llevar a tu negocio a esta nueva era!
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Quiero una aseroría gratuita YA!!!</a>
        </p>
        </v-parallax>
        
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
      <TheServices />
      <router-link to="/contacto">  
      <v-btn
          rounded
          color="success"
          dark
          elevation="7"
      >
          Más Información
      </v-btn>
      </router-link>
      
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
      <span class="display-2  back font-weight-black">
        Testimonios
      </span>
      <v-container grid-list-md>
        <v-layout >
          <v-flex xs12 md4>
            <v-card elevation="15">
              <v-img
                height="200px"
                src="https://image.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg"
              >
              </v-img>
              <v-card-title>
                <div>
                  <span class="display-1 black--text">Juan Caballero</span><br>
                  <span class="subtitle-1">EasyTools</span><br>
                  <span>Gracias a los servicios recibidos por DTrans4m, nuestra empresa  salió de la quierbra,el trabajo se simplificó y somos visibles!! y sobre todo el ambiente en la empresa fue toda una revolución, me encanta.</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>


          <v-flex xs12 md4>
            <v-card elevation="15">
              <v-img
                height="200px"
                src="https://image.freepik.com/free-photo/front-view-male-worker-sitting-his-work-table_179666-7923.jpg"
              >
              </v-img>
              <v-card-title>
                <div>
                  <span class="display-1 black--text">Pablo Ortega</span><br>
                  <span class="subtitle-1">Col Textiles</span><br>
                  <span>Al principio de la pandemia pensamos que sería nuestro final, con el apoyo de estos profesionales logramos no solo inicrementas las ventas sino que todos nuestros colaboradores tengan una excelente Navidad. ¡¡Gracias!!</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>


          <v-flex xs12 md4>
            <v-card elevation="15">
              <v-img
                height="200px"
                src="https://image.freepik.com/free-photo/surprised-excited-blond-girl-glasses-pointing-finger-mobile-phone-display-showing-application_176420-25011.jpg"
              >
              </v-img>
              <v-card-title>
                <div>
                  <span class="display-1 black--text">Vanessa Portela</span><br>
                  <span class="subtitle-1">Merca Orgánico</span><br>
                  <span>Jamás imagine que mis productos se pudieran vender de la manera en que se venden, cada día llegamos a más personas, y mi empresa cuenta con una aplicación para gestionar absolutamente todo!!!</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      
            
            <router-link to="/contacto">  
            <v-btn
                rounded
                color="success"
                dark
                elevation="7"
            >
                Más Información
            </v-btn>
            </router-link>
            
       
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import products from "@/products.js"
import TheServices from '@/components/TheServices.vue';
// import TeamCard from '@/components/Landing/TeamCard'
// import datosequipo from '@/assets/datosequipo.json'
// import FooterSection from '@/components/Landing/FooterSection'
  
  export default {
    name: 'LandingPage',

    

    components: {
      TheServices
    },
  
  
  }
</script>
