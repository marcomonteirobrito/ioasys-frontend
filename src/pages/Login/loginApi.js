import connectionApi from '../../services/connectionApi';

export const loginApi = ({ email, password }) => {
  try {
    return connectionApi.post('auth/sign-in', {
      email,
      password,
    });
  } catch (err) {
    throw new Error(err);
  }
};
