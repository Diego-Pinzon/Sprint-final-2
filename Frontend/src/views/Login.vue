<template>
  <div class="container mt-5">
    <TheNavigationLogin/>
    <TheLogin/>
  </div>
</template>

<script>

import TheNavigationLogin from '@/components/TheNavigationLogin.vue'
import TheLogin from '@/components/auth/TheLogin.vue'

export default {
    name: 'Login',
    components: {
      TheNavigationLogin,
        TheLogin,
  },
};
</script>