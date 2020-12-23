<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-card>
          <v-card-text class="pt-4">
            <div>
                <v-form v-model="valid" ref="form">
                  <v-text-field
                    label="Ingrese el email"
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Ingrese su contraseña"
                    v-model="password"
                    min="8"
                    :type="e1 ? 'password' : 'text'"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <v-layout justify-space-between>
                      <v-btn @click="submit" :class=" { 'text white--text' : valid, disabled: !valid }">Entrar</v-btn>
                      <a href="" class="text--text">Olvido su contraseña</a>
                  </v-layout>
                </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import swal from 'sweetalert';
import jwt from "jsonwebtoken";
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        console.log(this.login);
        let response = await this.$http.post('/api/usuario/signin', this.login);
        console.log(response.data.accessToken);
        let token = response.data.accessToken;
        var decoded = jwt.decode(token, {complete: true});
        console.log(decoded.payload);
        let user = decoded.payload;

        localStorage.setItem('jwt', token);
        localStorage.setItem('user',JSON.stringify(user));
        if (token){
            swal("Login correcto", `Los datos son correctos, bienvenido!`, "success");
            this.$router.push('/home');
        }
      } catch (e) {
        // console.log(e);
        swal("Oops!","Algo salio mal", "error");
      }
    },
  },
};
</script>