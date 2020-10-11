<template>
  <div class="games-table">
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Jugadores</th>
          <th>Estado</th>
          <th>Ganador</th>
          <th>Fecha actualización</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th><abbr title="Pagination">Pag {{currentPage}}</abbr></th>
          <th><abbr title="Total Pags">Total: {{totalPages}}</abbr></th>
          <th><abbr title="Games per Pag">Per page: {{gamesPerPage}}</abbr></th>
          <th><abbr title="Total Games">Games: {{totalGames}}</abbr></th>
          <th>
            <label for="choosePag">Elige una página:</label>
            <select name="choosePag" id="choosePag" multiple>
              <option v-for="page in totalPages" :key="page" :value="page"> {{page}} </option>
            </select>
          </th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="item in games" :key="item._id">
          <th>
            <span class="tag is-info is-light" >
              {{item.name}}
            </span>
          </th>
          <th>
            <span v-for="player in item.players" :key="player.name" :class="player.inTurn ? 'tag is-link is-light' : 'tag is-warning is-light'">
              {{player.name}}
            </span>
          </th>
          <th>
            <span v-if="item.finished" class="tag is-danger">
              finalizado
            </span>
            <span v-else class="tag is-warning">
              En progreso
            </span>
          </th>
          <th>
            <span v-if="item.winner" class="tag is-primary">
              {{item.winner}}
            </span>
            <span v-else class="tag is-danger">
              sin ganador
            </span>
          </th>
          <th>
            <span class="tag is-info">
              {{item.updatedAt}}
            </span>
          </th>
          <th>
            <div v-if="!item.finished" class="columns is-multiline">
              <button class="button is-success is-light mr-1" @click="resumeGame" :value="item._id">
                Reanudar
              </button>
              <button class="button is-warning is-light" @click="endGame" :value="item._id">
                Terminar juego
              </button>
            </div>
            <span v-else class="tag is-danger">
              Finalizado
            </span>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import getGame from "@/api/game/getGame";

export default {
  name: 'AppHome',
  data() {
    return {
      games: [],
      gamesPerPage: 10,
      totalGames: '',
      totalPages: [],
      currentPage: ''
    }
  },
  methods: {
    transformData (data) {
      console.log(data)
    },
    resumeGame(event){
      console.log(event.target.value)
    },
    endGame(event){
      console.log(event.target.value)
    }
  },
  mounted () {
    getGame().then(({data: {success}}) => {
      this.games = success.games;
      this.gamesPerPage = success.gamesPerPage;
      this.totalGames = success.totalGames;
      this.totalPages = success.totalPages;
      this.currentPage = success.currentPage;
    }).catch((err) => {
      console.error(err);
    });
  },
};
</script>
