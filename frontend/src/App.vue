<template>
  <div id="app">
    <navbar-component />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavbarComponent from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
};
</script>
