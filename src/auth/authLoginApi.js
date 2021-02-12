import connectionApi from '../services/connectionApi';

export const getAuthLogin = async ({ email, password }) => {
  try {
    return await connectionApi.post('auth/sign-in', {
      email,
      password,
    });
  } catch (err) {
    throw new Error(err);
  }
};
