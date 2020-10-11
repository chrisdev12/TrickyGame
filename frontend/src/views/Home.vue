<template>
  <div class="home">
    <h1> hola </h1>
    <main class="container is-widescreen">
      <div class="notification is-link">
        Bievenido a TrickyGame. El juego tiene unas simples reglas:
        <ol>
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
    </main>
    <section>
      <table-component />
    </section>
    <div ref="modalCreateGame" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        hola
      </div>
      <button
        @click="$refs['modalCreateGame'].classList.remove('is-active')"
        class="modal-close is-large"
        aria-label="close">
      </button>
    </div>
    <button class="button is-link" @click="$refs['modalCreateGame'].classList.add('is-active')">
      Comenzar juego
    </button>
  </div>
</template>

<script>
import TableComponent from '@/components/Table.vue';

export default {
  name: 'Home',
  components: {
    TableComponent,
  },
  methods: {
    startGame() {
      this.$refs['modalCreateGame'].classList.add('is-active');
    }
  },
}
</script>
