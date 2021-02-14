/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import getRefreshToken from '../../auth/authRefreshToken';
import getTokenApi from '../../commons/getToken';
import getBooksApi from './getBooksApi';

import BookCard from '../../components/BookCard/bookCard';
import Pagination from '../../components/Pagination/pagination';

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
  const [disableButtonLeft, setDisabledButtonLeft] = useState(false);
  const [disableButtonRight, setDisabledButtonRight] = useState(false);
  const [page, setPage] = useState(1);
  const [pageLength, setPageLenght] = useState(10);

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

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh-token');

      history.push('/');
    } catch (err) {
      throw new Error(err);
    }
  };

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

  const data = [
    {
      authors: ['Frederico Silva', 'Márcia Xavier'],
      title: 'Aspernatura',
      description:
        'Repellat velit neque delectus mollitia. Et eos nostrum id blanditiis odio sed. Dolorem atque sit tempora et excepturi sint suscipit at.\n \rAb voluptatum possimus. Culpa laborum consequuntur sit molestiae repellendus eos distinctio. Asperiores quia consectetur perspiciatis nobis et exercitationem hic distinctio.',
      pageCount: 810,
      category: 'Biografias',
      imageUrl: 'https://files-books.ioasys.com.br/Book-10.jpg',
      language: 'Inglês',
      isbn10: '9007883404',
      isbn13: '984-9007883404',
      publisher: 'Oliveira, Martins and Pereira',
      published: 2016,
      id: '60171639faf5de22b804a076',
    },
    {
      authors: ['Raul Pereira', 'Júlia Pereira Filho', 'Natália Barros Jr.'],
      title: 'Assumenda',
      description:
        'Est cupiditate rerum sed nisi quam dolorem vel qui veniam. Veritatis quam expedita. Dolor unde animi est dolor unde qui nisi. Iusto in saepe repellendus officia omnis aut reiciendis sapiente. Voluptate et at ut. Velit est iure repellat doloribus omnis earum laborum.\n \rModi sapiente laudantium similique recusandae modi eveniet minima sint in. Eum autem nihil est enim a nostrum quaerat magnam. Et tempora iure quidem aliquid rerum accusamus id.',
      pageCount: 990,
      category: 'Biografias',
      imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
      language: 'Inglês',
      isbn10: '6163701883',
      isbn13: '951-6163701883',
      publisher: 'Barros - Xavier',
      published: 2003,
      id: '60171639faf5de22b804a06e',
    },
    {
      authors: ['Lorraine Barros', 'Sra. Ofélia Silva', 'Warley Pereira'],
      title: 'Aut',
      description:
        'Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.',
      pageCount: 965,
      category: 'Biografias',
      imageUrl: 'https://files-books.ioasys.com.br/Book-5.jpg',
      language: 'Português',
      isbn10: '3355205900',
      isbn13: '112-3355205900',
      publisher: 'Martins - Xavier',
      published: 2019,
      id: '60171639faf5de22b804a16c',
    },
    {
      authors: ['Lorraine Barros', 'Sra. Ofélia Silva', 'Warley Pereira'],
      title: 'Aut',
      description:
        'Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.',
      pageCount: 965,
      category: 'Biografias',
      imageUrl: 'https://files-books.ioasys.com.br/Book-5.jpg',
      language: 'Português',
      isbn10: '3355205900',
      isbn13: '112-3355205900',
      publisher: 'Martins - Xavier',
      published: 2019,
      id: '60171639faf5de22b804a16c',
    },
  ];

  return (
    <Container>
      <DashboardHeader>
        <LogoContainer>
          <Logo />
          <span>Books</span>
        </LogoContainer>
        <DashboardDetail>
          <Detail>
            Bem vindo, <strong>{userName}</strong>
          </Detail>
          <LogoutContainer onClick={handleLogout}>
            <LogoutIcon />
          </LogoutContainer>
        </DashboardDetail>
      </DashboardHeader>
      <BooksContainer>
        {data.map((book) => (
          <BookCard booksData={book} />
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
