import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import getRefreshToken from '../../auth/authRefreshToken';

// import BookCard from '../../components/BookCard/bookCard';

import getTokenApi from '../../commons/getToken';
import getBooksApi from './getBooksApi';

import {
  Container,
  DashboardHeader,
  LogoContainer,
  Logo,
  DashboardDetail,
  Detail,
  LogoutIcon,
  BooksContainer,
  PageContainer,
  LogoutContainer,
} from './styles';

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState('Mudar nome');
  // eslint-disable-next-line no-unused-vars
  const [booksData, setBooksData] = useState([]);

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
        page: '1',
        amount: '25',
        category: 'biographies',
      });

      setBooksData(responseBooks);
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

  useEffect(async () => {
    try {
      const responseToken = await getToken();
      await getBooks(responseToken);
    } catch (err) {
      console.error(err);
    }
  }, []);

  console.log(booksData);
  return (
    <Container>
      <DashboardHeader>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <DashboardDetail>
          <Detail>
            Bem vindo, <strong>{userName}</strong>
          </Detail>
          <LogoutContainer>
            <LogoutIcon />
          </LogoutContainer>
        </DashboardDetail>
      </DashboardHeader>
      <BooksContainer>
        {/* <BookCard booksData={booksData} /> */}
      </BooksContainer>

      <PageContainer />
    </Container>
  );
};

export default Dashboard;
