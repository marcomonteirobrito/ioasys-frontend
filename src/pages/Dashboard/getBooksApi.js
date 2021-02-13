import connectionApi from '../../services/connectionApi';

const getBooks = ({ token, refreshToken, page, amount, category }) => {
  try {
    return connectionApi.post('books', {
      headers: {
        Authorization: token,
        RefreshToken: refreshToken,
      },
      body: {
        page,
        amount,
        category,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default getBooks;
