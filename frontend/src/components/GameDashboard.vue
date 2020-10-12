<template>
  <div class="gameDashboard">
    <h1>A Jugar !!! </h1>
    <form @submit.prevent="updateGame" method="post">
      <div v-for="(player, index) in getCurrentGamePlayers" :key="player.name" class="field">
        <div v-if="player.inTurn">
          Es turno de {{player.name}}. Recuerda que tu figura es {{figures[index]}}
        </div>
      </div>
      <div class="control">
        <div class="select is-info">
          <select required @change="addMovement">
            <option :value="false">Selecciona la jugada</option>
            <option
              v-for="move in movementsAllowed" :key=move  :value="move">
              {{move}}
            </option>
          </select>
        </div>
      </div>
      <div class="control mt-5">
        <button type="submit" class="button is-primary is-medium is-fullwidth" :disabled="playBtnDisabled">
          Jugar
        </button>
      </div>
    </form>
    <div class="gameDashboard__end mt-6">
      <label class="checkbox">
        <input @click="deleteBtnActive = !deleteBtnActive" type="checkbox">
          Estoy seguro de terminar este juego.
      </label>
      <button @click="endGameById" class="button is-danger mt-3" :disabled="deleteBtnActive">
        Terminar juego
      </button>
    </div>
  </div>
</template>

<script>
import Game from "@/api/Game";
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'GameDashboard',
  data() {
    return {
      deleteBtnActive: true,
      newMove: null,
      figures: ['🍔','🍰'],
      possibleMoves: [1,2,3,4,5,6,7,8,9]
    }
  },
  computed: {
    ...mapState('game', ['current_game']),
    ...mapGetters('game', ['getCurrentGamePlayers','getGameMovesPlayed','getCurrentGameId']),
    movementsAllowed(){
      return this.possibleMoves.filter((item) => !this.getGameMovesPlayed.includes(item));
    },
    playBtnDisabled(){
      if (this.newMove === null) return true;
      return false;
    }
  },
  methods: {
    ...mapActions('game', ['updateMovesOnGame']),
    addMovement({target}){
      if (target.value == "false") return this.newMove = null;
      this.newMove = target.value;
    },
    updateGame(){
      this.addPlayerMovements();
      this.changeTurns();
      this.updateMovesOnGame(this.getCurrentGamePlayers);
    },
    endGameById(){
      Game.endById(this.getCurrentGameId)
      .then(() => {
        this.$toastr.success('El juego ha sido terminado exitosamente.', 'Juego terminado');
        this.$router.push('/');
      })
      .catch(() => this.$toastr.error('Lo sentimos, algo ha fallado. Por favor intenta terminar de nuevo', 'Terminación fallida'));
    },
    addPlayerMovements(){
      for (const player of this.getCurrentGamePlayers) {
        if (player.inTurn) {
          player.moves.push(parseInt(this.newMove));
        }
      }
    },
    changeTurns(){
      for (const player of this.getCurrentGamePlayers) {
        player.inTurn = !player.inTurn
      }
    }
  },
}
</script>
