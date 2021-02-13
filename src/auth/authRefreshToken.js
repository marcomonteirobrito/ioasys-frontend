import connectionApi from '../services/connectionApi';

export const getRefreshToken = async (refreshToken) => {
  try {
    return await connectionApi.post('auth/refresh-token', {
      refreshToken,
    });
  } catch (err) {
    throw new Error(err);
  }
};
