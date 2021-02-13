import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// import BookCard from '../../components/BookCard/bookCard';

import getToken from '../../commons/getToken';
import getBooks from './getBooksApi';

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

  useEffect(async () => {
    try {
      await getToken();
      const response = getBooks();
      setBooksData(response);
    } catch (err) {
      console.error(err);
      history.push('/');
    }
  }, []);

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
