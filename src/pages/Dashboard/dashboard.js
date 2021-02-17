import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import getRefreshToken from '../../auth/authRefreshToken';
import getTokenApi from '../../commons/getToken';
import { getBooksApi } from '../../commons/getBooksApi';

import BookCard from '../../components/BookCard/BookCard';
import Pagination from '../../components/Pagination/Pagination';
import BookDetailModal from '../../components/BookDetailModal/BookDetailModal';

import {
  Container,
  DashboardHeader,
  LogoContainer,
  Logo,
  DashboardDetail,
  Detail,
  LogoutIcon,
  BooksContainer,
  LogoutContainer,
} from './styles';

const Dashboard = () => {
  const [user, setUser] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [booksData, setBooksData] = useState([]);
  const [disableButtonLeft, setDisabledButtonLeft] = useState(false);
  const [disableButtonRight, setDisabledButtonRight] = useState(false);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [pageLength, setPageLenght] = useState(10);
  const [bookDetailModalVisible, setBookDetailModalVisible] = useState(false);
  const [bookSelected, setBookSelected] = useState({});

  const history = useHistory();

  const notAuthorized = async (responseToken) => {
    try {
      const newToken = await getRefreshToken(responseToken);
      return newToken;
    } catch (err) {
      throw new Error(err);
    }
  };

  const getBooks = async (responseToken) => {
    try {
      const responseBooks = await getBooksApi({
        responseToken,
        page: `${page}`,
        amount: '12',
        category: 'biographies',
      });

      setBooksData(responseBooks.data.data);
    } catch (err) {
      if (err.message === 'Error: Request failed with status code 401') {
        const newToken = await notAuthorized(responseToken);
        await getBooks({
          ...responseToken,
          token: newToken,
        });
      }

      throw new Error(err);
    }
  };

  const getToken = async () => {
    try {
      return await getTokenApi();
    } catch (err) {
      history.push('/');
      throw new Error(err);
    }
  };

  const getUser = async () => {
    setUser(localStorage.getItem('user'));
  };

  useEffect(async () => {
    const responseToken = await getToken();
    await getBooks(responseToken);
    getUser();
  }, []);

  useEffect(async () => {
    const responseToken = await getToken();
    await getBooks(responseToken);
  }, [page]);

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh-token');

      history.push('/');
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    page === 1 ? setDisabledButtonLeft(true) : setDisabledButtonLeft(false);
    // eslint-disable-next-line no-unused-expressions
    page === pageLength
      ? setDisabledButtonRight(true)
      : setDisabledButtonRight(false);
  }, [page]);

  const onClickButtonLeft = () => {
    if (page - 1 > 0) {
      setPage(page - 1);
    }
  };

  const onClickButtonRight = () => {
    if (page + 1 <= pageLength) {
      setPage(page + 1);
    }
  };

  const getBookDetail = (bookId) => {
    const bookSelectedFilter = booksData.find((book) => book.id === bookId);
    setBookSelected(bookSelectedFilter);
  };

  const handleBookSelected = (bookId) => {
    getBookDetail(bookId);
    setBookDetailModalVisible(true);
  };

  return (
    <Container>
      {bookDetailModalVisible && (
        <BookDetailModal
          visible={bookDetailModalVisible}
          onClose={() => setBookDetailModalVisible(false)}
          bookData={bookSelected}
        />
      )}

      <DashboardHeader>
        <LogoContainer>
          <Logo />
          <span>Books</span>
        </LogoContainer>
        <DashboardDetail>
          <Detail>
            Bem vindo, <strong>{user || 'recrutador'}</strong>
          </Detail>
          <LogoutContainer onClick={handleLogout}>
            <LogoutIcon />
          </LogoutContainer>
        </DashboardDetail>
      </DashboardHeader>
      <BooksContainer>
        {booksData.map((book) => (
          <BookCard
            bookData={book}
            key={book.id}
            onClick={() => handleBookSelected(book.id)}
          />
        ))}
      </BooksContainer>

      <Pagination
        page={page}
        pageLength={pageLength}
        onClickButtonLeft={onClickButtonLeft}
        onClickButtonRight={onClickButtonRight}
        disableButtonLeft={disableButtonLeft}
        disableButtonRight={disableButtonRight}
      />
    </Container>
  );
};

export default Dashboard;
