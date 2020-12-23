<template>
  <v-container>
    <v-layout>
      <v-flex>
       
            <div class="text-center">
          <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Dejanos tus datos para programar una asesoría gratuita!
        </h2>
        
        <v-row justify="center" align="center">
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field background-color="white" v-model="email" :rules="emailRules" label="Email" required outlined>
          </v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center" align="center">
        <v-col
          cols="12"
          sm="6"
        >
          <v-textarea
            background-color="white"
            label="Teléfono de contacto"
            auto-grow
            outlined
            rows="1"
            row-height="15"
          ></v-textarea>
        </v-col>
        </v-row>
        <v-row justify="center" align="center">
        <v-col
          cols="12"
          sm="6"
        >
          <v-textarea
            background-color="white"
            label="Mensaje"
            auto-grow
            outlined
            rows="3"
            row-height="30"
            shaped
          ></v-textarea>
        </v-col>
        </v-row>

        
            <v-btn
                rounded
                color="success"
                dark
                elevation="7"
            >
                Solicitar una cita!
            </v-btn>
            
      </v-col>
      </div>
      
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'TheContact',
}
</script>