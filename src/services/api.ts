import axios from 'axios';

const SFF_API_URL = 'http://www.sff-siberia.ru/api';
const FFNSO_API_URL = 'https://ffnso.ru/api';

export const getTournamentData = async () => {
  try {
    const [sffResponse, ffnsoResponse] = await Promise.all([
      axios.get(`${SFF_API_URL}/tournaments/129/`),
      axios.get(`${FFNSO_API_URL}/tournaments/`)
    ]);

    return {
      sffData: sffResponse.data,
      ffnsoData: ffnsoResponse.data
    };
  } catch (error) {
    console.error('Error fetching tournament data:', error);
    throw error;
  }
};

// Функция для получения данных о матчах
export const getMatchesData = async () => {
  try {
    const [sffMatches, ffnsoMatches] = await Promise.all([
      axios.get(`${SFF_API_URL}/matches/`),
      axios.get(`${FFNSO_API_URL}/matches/`)
    ]);

    return {
      sffMatches: sffMatches.data,
      ffnsoMatches: ffnsoMatches.data
    };
  } catch (error) {
    console.error('Error fetching matches data:', error);
    throw error;
  }
};

// Функция для получения статистики игроков
export const getPlayersStats = async () => {
  try {
    const [sffStats, ffnsoStats] = await Promise.all([
      axios.get(`${SFF_API_URL}/players/stats/`),
      axios.get(`${FFNSO_API_URL}/players/stats/`)
    ]);

    return {
      sffStats: sffStats.data,
      ffnsoStats: ffnsoStats.data
    };
  } catch (error) {
    console.error('Error fetching players stats:', error);
    throw error;
  }
}; 