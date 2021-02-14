import connectionApi from '../services/connectionApi';

const getRefreshToken = async (refreshToken) => {
  try {
    return await connectionApi.post('auth/refresh-token', {
      'refresh-token': refreshToken.refreshToken,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default getRefreshToken;
