import { baseURL } from '../utils/BaseUrl';

export const getAuthLogin = async ({ email, password }) => {
  try {
    const response = await fetch(`${baseURL}auth/sign-in`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return response;
  } catch (err) {
    throw new Error(err);
  }
};
