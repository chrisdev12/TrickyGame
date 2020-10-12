import httpClient from '@/api/httpClient';

class Game{

  createOne(game){
    return httpClient.post('',{...game});
  }

  getAllGames(page = 1) {
    if (page == 0) page = 1;
    return httpClient.get('',{ params: { page } })
  }

  getById(id) {
    return httpClient.get(`/getone/${id}`)
  }

  editById(id, game) {
    return httpClient.put(`/${id}`, {players: game})
  }

  endById(id) {
    return httpClient.patch(`/end/${id}`)
  }
}

export default new Game();
