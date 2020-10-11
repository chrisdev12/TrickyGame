import httpClient from '@/api/httpClient';

const getAllGames = () => {
  console.log(process.env.API_URL_BASE);
  return httpClient.get()
}

export default getAllGames;