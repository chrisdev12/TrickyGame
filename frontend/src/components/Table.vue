<template>
  <h1>Tabla de partidas</h1>
</template>

<script>
import getGame from "@/api/game/getGame";

export default {
  name: 'AppHome',
  mounted () {
    getGame().then((result) => {
      console.log(result)
    }).catch((err) => {
      console.error(err);
    });
  },
};
</script>
