<template>
  <div class="home">
    <main class="container is-widescreen mt-2">
      <div class="notification is-link">
        <p>
          Bievenido a TrickyGame. El juego tiene unas simples reglas:
        </p>
        <div class="content">
          <ol type="A">
            <li>
              Gana el primero en tener 3 fichas en lineas seguidas
            </li>
            <li>
              Una vez haya ganador el juego se termina y no se puede reanudar o alterar
            </li>
            <li>
              El juego se puede terminar por cualquiera de los jugadores o cuando ya no haya más movimientos posibles.
            </li>
            <li>
              El tablero se divide en 9 espacios y para elegir donde poner la ficha se debe hacer referencia a ese número en
              el tablero
            </li>
          </ol>
        </div>
        <p>
          <i>
            Nota: En la tabla de partidas puedes terminar o reanudar un juego.
            El nombre del jugador que aparece resaltado es el que actualmente tiene el turno
          </i>
        </p>
      </div>
      <button class="button is-success is-light is-large is-outlined" @click="updateCreateModal(true)">
        Comenzar juego
      </button>
    </main>
    <section class="mt-6">
      <table-component />
    </section>
    <div ref="modalCreateGame" class="modal modal-createGame">
      <div class="modal-background"></div>
      <div class="modal-content">
        <create-game-modal-component />
      </div>
      <button
        @click="updateCreateModal(false)"
        class="modal-close is-large"
        aria-label="close">
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TableComponent from '@/components/Table.vue';
import CreateGameModalComponent from '@/components/CreateGameModal.vue';

export default {
  name: 'Home',
  components: {
    TableComponent,
    CreateGameModalComponent
  },
  methods: {
    ...mapActions('game', ['updateCreateModal']),
  },
  watch: {
    create_modal(newValue) {
      if (newValue) {
        this.$refs['modalCreateGame'].classList.add('is-active');
      } else {
        this.$refs['modalCreateGame'].classList.remove('is-active')
      }
    }
  },
  computed: {
    ...mapState('game', ['create_modal']),
  },
}
</script>
