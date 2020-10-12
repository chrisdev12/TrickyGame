<template>
  <div>
    <h1>A Jugar !!! </h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'GameDashboard',
  computed: {
    ...mapState('game', ['current_game']),
    ...mapGetters('game', ['getWinnerGame']),
  },
  watch: {
    current_game(newValue) {
      console.log(newValue)
    }
  },
}
</script>
