/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import BookDetailModal from '../BookDetailModal';

const bookDataMock = {
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
};

const renderBookDetailModal = () => {
  const onButtonClick = jest.fn();

  return render(
    <BookDetailModal
      onClose={onButtonClick}
      visible={false}
      bookData={bookDataMock}
    >
      Entrar
    </BookDetailModal>
  );
};

describe('BookDetailModal', () => {
  it('Deve renderizar o componente corretamente', () => {
    renderBookDetailModal();

    expect(document.body).toMatchSnapshot();
  });
});
