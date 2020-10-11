import httpClient from '@/api/httpClient';

class Game{

  createOne({game}){
    console.log(game)
    return httpClient.post('',{body: game});
  }

  getAllGames(page = 1) {
    if (page == 0) page = 1;
    return httpClient.get('',{ params: { page } })
  }

  getById(id) {
    return httpClient.get(`/${id}`)
  }

  endById(id) {
    return httpClient.patch(`/end/${id}`)
  }
}

export default new Game();
