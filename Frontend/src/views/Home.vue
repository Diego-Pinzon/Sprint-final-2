<template>
  <v-container >
      <TheNavigation />
    <v-layout>
      <v-flex>
        <LandingPage/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'Home',
  components: {
    TheNavigation,
    LandingPage
  }
}
</script>
