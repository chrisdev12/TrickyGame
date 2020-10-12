<template>
  <div class="game">
    <game-board-component />
    <game-dashboard-component />
    <div ref="modalFoundWinner" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <article class="message is-primary">
          <div class="message-header">
            <p>TENEMOS UN GANADOR 🥳🥳 </p>
          </div>
          <div class="message-body">
            🤩 Felicidades <strong>{{getWinnerGame}}</strong> has ganado 🤩.
            Recuerda que está partida acaba de finalizar, pero puedes comenzar otra 😊
          </div>
          <button class="button is-link is-fullwidth is-outlined" @click="finishGame">
            Aceptar
          </button>
        </article>
      </div>
    </div>
    <div ref="modalGameFinished" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <article class="message is-warning">
          <div class="message-header">
            <p> Ouch, parece que no tenemos un ganador 😭 </p>
          </div>
          <div class="message-body">
            Lastimosamente se han jugado todos los movimientos y no hemos tenido ningún ganador.
            Recuerda que está partida acaba de finalizar, pero puedes comenzar otra 😊
          </div>
          <button class="button is-warning is-fullwidth is-outlined" @click="finishGame">
            Aceptar
          </button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Game from "@/api/Game";
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
    ...mapGetters('game', ['getWinnerGame','getGameMovesPlayed','getCurrentGameId']),
  },
  methods: {
    ...mapActions('game', ['updateCurrentGame']),
    finishGame(){
      Game.endById(this.getCurrentGameId)
      .finally(() => this.$router.push('/'))
    }
  },
  watch: {
    getWinnerGame(newValue) {
      if(newValue !== undefined){
        this.$refs['modalFoundWinner'].classList.add('is-active');
      }
    },
    getGameMovesPlayed(newValue) {
      //GetWinner will take a bit time more to be reflected
      if(newValue.length === 9){
        setTimeout(() => {
          if (this.getWinnerGame) return this.$refs['modalFoundWinner'].classList.add('is-active');
          return this.$refs['modalGameFinished'].classList.add('is-active');
        }, 500)
      }
    }
  },
  beforeMount () {
    const { id } = this.$route.params;
    this.updateCurrentGame(id);
  },
}
</script>
