<template>
  <div class="game">
    <div>
      <game-board-component />
    </div>
    <section>
      <game-dashboard-component />
    </section>
  </div>
</template>

<script>
import GameBoardComponent from '@/components/GameBoard.vue';
import GameDashboardComponent from '@/components/GameDashboard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Game',
  components: {
    GameBoardComponent,
    GameDashboardComponent
  },
  methods: {
    ...mapActions('game', ['updateCurrentGame']),
  },
  beforeMount () {
    const { id } = this.$route.params;
    this.updateCurrentGame(id);
  },
}
</script>
