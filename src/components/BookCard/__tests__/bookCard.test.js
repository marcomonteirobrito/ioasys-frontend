/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import BookCard from '../BookCard';

const bookDataMock = [
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
];

const renderBookCard = () => render(<BookCard bookData={bookDataMock} />);

describe('Input', () => {
  it('Deve renderizar o componente corretamente', () => {
    renderBookCard();

    expect(document.body).toMatchSnapshot();
  });
});
