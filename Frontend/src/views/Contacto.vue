<template>
  <v-container>
    <v-layout>
      <v-flex>
        <TheNavigation/>
        <TheContact/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import TheNavigation from "@/components/TheNavigation"
import TheContact from "@/components/TheContact"

export default {
    components:{
      TheNavigation,
      TheContact
    } 
}
</script>