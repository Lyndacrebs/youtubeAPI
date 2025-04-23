import axios from 'axios';

const VIMEO_TOKEN = '7d0509abef735bcc38a0d0e180760bf4'; 

export const buscarVideosVimeo = async (pesquisa) => {
  const response = await axios.get(
    `https://api.vimeo.com/videos`, {
      headers: { Authorization: `Bearer ${VIMEO_TOKEN}` },
      params: { query: pesquisa, per_page: 5 }
    }
  );
  return response.data.data;
};