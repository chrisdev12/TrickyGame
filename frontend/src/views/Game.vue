<template>
  <div class="game">
    <game-board-component />
    <game-dashboard-component />
    <div ref="modalFoundWinner" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    <div ref="modalGameFinished" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
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
  computed: {
    ...mapGetters('game', ['getWinnerGame','getGameMovesPlayed']),
  },
  methods: {
    ...mapActions('game', ['updateCurrentGame']),
  },
  watch: {
    getWinnerGame(newValue) {
      console.log(newValue);
      console.log("encontramos un ganador en game");
    },
    getGameMovesPlayed(newValue) {
      console.log(newValue);
    }
  },
  beforeMount () {
    const { id } = this.$route.params;
    this.updateCurrentGame(id);
  },
}
</script>
