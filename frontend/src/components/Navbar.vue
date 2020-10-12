<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ path: '/' }">
        <img class="ml-5" src="https://www.flaticon.com/svg/static/icons/svg/3421/3421289.svg" />
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <button v-if="$route.name=='Home'" class="button is-success is-light is-medium is-outlined" @click="updateCreateModal(true)">
            Comenzar juego
          </button>
          <button v-else class="button is-success is-light is-medium is-outlined">
            {{getCurrentGameName}}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  props: {
    msg: String,
  },
  methods: {
    ...mapActions('game', ['updateCreateModal']),
  },
  computed: {
    ...mapGetters('game', ['getCurrentGameName']),
  },
};
</script>
