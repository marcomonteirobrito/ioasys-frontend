import connectionApi from '../../services/connectionApi';

const getBooks = async ({ responseToken, page, amount, category }) => {
  try {
    const response = await connectionApi.get('books', {
      headers: {
        Authorization: responseToken.token,
        'refresh-token': responseToken.refreshToken,
      },
      params: {
        page,
        amount,
        category,
      },
    });

    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export default getBooks;
