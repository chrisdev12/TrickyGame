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
          <th>
            <span class="tag is-info is-light">
              Pag: {{currentPage}}
            </span>
          </th>
          <th>
            <span class="tag is-info is-light">
              Total: {{totalPages}}
            </span>
          </th>
          <th>
            <span class="tag is-info is-light">
              Per page: {{gamesPerPage}}
            </span>
          </th>
          <th>
            <span class="tag is-info is-light">
              Games: {{totalGames}}
            </span>
          </th>
          <th>
            <div class="control">
              <div class="select">
                <select @change="searchByPage" >
                  <option value="false">Elige una pagina</option>
                  <option v-for="page in totalPages" :key="page" :value="page"> {{page}} </option>
                </select>
              </div>
            </div>
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
            <div v-if="!item.finished" class="columns is-multiline mt-0">
              <button class="button is-primary mr-3" @click="resumeGame" :value="item._id">
                Reanudar
              </button>
              <button class="button is-warning" @click="endGame" :value="item._id">
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
import Game from "@/api/Game";
import { mapState } from 'vuex';

export default {
  name: 'AppHome',
  data() {
    return {
      games: [],
      gamesPerPage: 10,
      totalGames: '',
      totalPages: [],
      currentPage: '',
      pageSelected: ''
    }
  },
  computed: {
    ...mapState('game', ['new_game']),
  },
  watch: {
    new_game(newValue) {
      console.log(newValue);
      this.fetchAllGames(this.pageSelected);
    }
  },
  methods: {
    resumeGame({target}){
      const id = target.value
      this.$router.push({ name: 'Game', params: { id} })
    },
    endGame({target}){
      const id = target.value
      this.endGameById(id);
    },
    searchByPage({target}){
      if (target.value == "false") return;
      this.pageSelected =  target.value
      this.fetchAllGames(this.pageSelected);
    },
    fetchAllGames(page = 1){
      Game.getAllGames(page)
      .then(({data: {success}}) => {
        this.games = success.games;
        this.gamesPerPage = success.gamesPerPage;
        this.totalGames = success.totalGames;
        this.totalPages = success.totalPages;
        this.currentPage = success.currentPage;
      }).catch((err) => {
        console.error(err);
      });
    },
    endGameById(id){
      Game.endById(id)
      .then(() => {
        this.fetchAllGames(this.pageSelected);
      }).catch((err) => {
        console.error(err);
      });
    }
  },
  mounted () {
    this.fetchAllGames();
  },
};
</script>
