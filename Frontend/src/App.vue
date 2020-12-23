<template>
  <v-app>
    <v-content class="secondary">
      <transition name="fade" mode="out-in">
      <router-view :key="$route.path"/>
    </transition>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>