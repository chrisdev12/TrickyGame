<template>
  <div class="modal-createGame">
    <form @submit.prevent="createGame" method="post">
      <div class="field">
        <label class="label">Nombre del juego</label>
        <div class="control">
          <input required v-model="name" class="input" type="text" placeholder="Nombre del juego">
        </div>
      </div>
      <div class="field">
        <label class="label">Jugador 1</label>
        <div class="control">
          <input required v-model="player1.name" class="input" type="text" placeholder="Nombre del primer jugador">
        </div>
      </div>
      <div class="field">
        <label class="label">Jugador 2</label>
        <div class="control">
          <input required v-model="player2.name" class="input" type="text" placeholder="Nombre del segundo jugador">
        </div>
      </div>
      <div class="field">
        <p class="is-size-5 mb-3 has-text-weight-semibold"> ¿ Qué jugador tiene el primer turno ?</p>
        <div class="control">
          <label class="radio">
            <input
              @click="player2.inTurn = false, player1.inTurn = true"
              type="radio"
              :value="player1"
              name="turn">
            {{player1.name}}
          </label>
          <label class="radio">
            <input
              @click="player1.inTurn = false, player2.inTurn = true"
              type="radio"
              :value="player2"
              name="turn">
            {{player2.name}}
          </label>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-primary is-light">Crear</button>
        </div>
        <div class="control">
          <button type="button" @click="updateCreateModal(false)" class="button is-danger is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Game from "@/api/Game";
import { mapActions  } from 'vuex';

export default {
  name: 'CreateGameModal',
  data() {
    return {
      name: '',
      player1: {
        name: '',
        inTurn: true,
        moves: []
      },
      player2: {
        name: '',
        inTurn: false,
        moves: []
      },
    }
  },
  methods: {
    ...mapActions('game', ['updateCreateModal','updateNewGame']),
    createGame() {
      let newGame = {
        name: this.name,
        players: [
          this.player1,
          this.player2
        ]
      }
      Game.createOne(newGame)
        .then(({data}) => {
          let { _id }= data.success;
          this.$toastr.success('Creación exitosa. En breve será redirigido a la partida', 'Juego creado');
          setTimeout(() => {
            this.$router.push(`/game/${_id}`);
          }, 1500)
        })
        .catch(() => this.$toastr.error('Lo sentimos, algo ha fallado. Por favor recarga la página e intenta de nuevo', 'Creación fallida'))
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
