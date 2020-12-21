<template>
    <div>
       <v-data-table
      :headers="headers"
      :items="usuarios"
      :loading ="cargando"
      loading-text="Cargando...Por favor espere..."
      sort-by="id"
      class="elevation-1"
      
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Categotias</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Agregar Usuario
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre de la categoria"
                      ></v-text-field>
                  </v-row>
                  <v-row>
                      <v-text-field
                        v-model="editedItem.password"
                        label="Contraseña"
                      ></v-text-field>
                  </v-row>
                  
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">¿Desea cambiar el estado de la categoria?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-checkbox-marked-circle-outline
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
    </div>
</template>
<script>
//import axios from "axios";
export default {
  
    data: () => ({
    dialog: false,
    dialogDelete: false,
    cargando: true,
    iconocambio: '',
    headers: [
      {
        text: 'Usuarios registrados',
        align: 'start',
        sortable: false,
        value: 'nombre',
      },
      { text: 'ID', value: 'id', sortable: false},
      { text: 'Rol', value: 'rol', sortable: false},
      { text: 'Correo electronico', value: 'email' },
      { text: 'Estado', value: 'estado' },
      { text: 'Contraseña', value: 'password' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: '',
      rol: '',
      email: '',
      password: '',
      estado: 0,
    },
    defaultItem: {
      id: 0,
      nombre: '',
      rol: '',
      email: '',
      password: '',
      estado: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nueva Categoria' : 'Editar Categoria'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.cargando = 'loading'
      this.list()
    },
    list(){
      
      this.$axios.get('/usuario/list')
        .then( (response) => {
            this.usuarios = response.data
            this.cargando = false
        })
        .catch(error =>{
          return error
        })
      
    },

    editItem (item) {
      
      this.editedIndex = this.usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true

      
    },

    deleteItem (item) {
      this.editedIndex = this.usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      if(this.editedItem.estado === 1){
          this.$axios.put('/usuario/deactivate', {id: this.editedItem.id})
          .then( () =>{
        this.list()
      })
          
      }else{
          this.$axios.put('/usuario/activate', {id: this.editedItem.id})
          .then( () =>{
        this.list()
      })
      }
      
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        //Editar en base de datos
      let objetoBusqueda = {
        nombre: this.editedItem.nombre,
        password: this.editedItem.password,
        email: this.editedItem.email,
        id: this.editedItem.id
      }
      this.$axios.put('/usuario/update',objetoBusqueda)
      .then( () =>{
        this.list()
      })
        Object.assign(this.usuarios[this.editedIndex], this.editedItem)
      } else {
        //Editar en base de datos
        let objetoBusqueda = {
         nombre: this.editedItem.nombre,
        password: this.editedItem.password,
        email: this.editedItem.email,
        rol: this.editedItem.rol,
        estado: 1
      }
      this.$axios.post('/usuario/add',objetoBusqueda)
      .then( () =>{
        this.list()
      })
        this.usuarios.push(this.editedItem)
      }
      //Actualizar la tabla
      this.close()
    },
  },
}
</script>