<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-card>
          <v-card-text class="pt-4">
            <div>
                <v-form v-model="login.valid" ref="form">
                  <v-text-field
                    label="Ingrese el email"
                    v-model="login.email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Ingrese su contraseña"
                    v-model="login.password"
                    min="8"
                    type="password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <v-layout justify-space-between>
                      <v-btn @click="loginUser" :disabled="!login.valid">Entrar</v-btn>
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
        valid: true
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [ 
        v => !!v || 'Password is required', 
        v => (v && v.length >= 5) || 'Password must have 5+ characters' 
      ]
    };
  },
  methods: {
    async loginUser() {
      try {
        //console.log(this.login);
        let response = await this.$http.post('/api/usuario/login', this.login);
        //console.log(response.data.accessToken);
        let token = response.data.tokenReturn;
        //var decoded = jwt.decode(token, {complete: true});
        //console.log(decoded.payload);
        let user = response.data.user;

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