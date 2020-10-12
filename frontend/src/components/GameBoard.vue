<template>
  <div class="gameboard">
    <div class="gameboard__top gameboard__left">
      1
    </div>
    <div class="gameboard__top">
      2
    </div>
    <div class="gameboard__top gameboard__right">
      3
    </div>
    <div class="gameboard__med gameboard__left">
      4
    </div>
    <div class="gameboard__med">
      5
    </div>
    <div class="gameboard__med gameboard__right">
      6
    </div>
    <div class="gameboard__down gameboard__left">
      7
    </div>
    <div class="gameboard__down">
      8
    </div>
    <div class="gameboard__down gameboard__right">
      9
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GameBoard',
  methods: {
    drawBoard(player1,player2) {
      const fields = document.querySelectorAll('.gameboard div');
      fields.forEach((item) => {
        if (player1.includes(parseInt(item.innerText))) {
          item.innerText = '🍔';
        } else if(player2.includes(item.innerText)) {
          item.innerText = '🍰';
        }
      });
      console.log(fields);
    }
  },
  computed: {
    ...mapGetters('game',['getCurrentGamePlayers'])
  },
  watch: {
    getCurrentGamePlayers(newValue) {
      const [player1, player2] = newValue
      this.drawBoard(player1.moves,player2.moves)
    }
  },
  mounted () {
    const [player1, player2] = this.getCurrentGamePlayers
    this.drawBoard(player1.moves,player2.moves)
  },
};
</script>
