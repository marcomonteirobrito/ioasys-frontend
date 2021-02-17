import connectionApi from '../services/connectionApi';

export const getBooksApi = async ({
  responseToken,
  page,
  amount,
  category,
}) => {
  try {
    const response = await connectionApi.get('books', {
      headers: {
        Authorization: `Baerer ${responseToken.token}`,
        'refresh-token': `Baerer ${responseToken.refreshToken}`,
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

export const getBookById = async (responseToken, bookId) => {
  try {
    const response = await connectionApi.get(`books${bookId}`, {
      headers: {
        Authorization: `Baerer ${responseToken.token}`,
        'refresh-token': `Baerer ${responseToken.refreshToken}`,
      },
    });

    return response;
  } catch (err) {
    throw new Error(err);
  }
};
