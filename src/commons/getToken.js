const getToken = async () => {
  try {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refresh-token');

    return {
      token,
      refreshToken,
    };
  } catch (err) {
    throw new Error({
      error: 'Não foi possível encontrar o token e/ou refresh-token',
      detail: err,
    });
  }
};

export default getToken;
