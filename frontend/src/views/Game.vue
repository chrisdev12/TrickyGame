<template>
  <div>
    <game-board-component />
  </div>
</template>

<script>
import GameBoardComponent from '@/components/GameBoard.vue';

export default {
  name: 'Game',
  components: {
    GameBoardComponent,
  },
  beforeMount () {
    const { id } = this.$route.params;
    console.log(id);
  },
}
</script>
