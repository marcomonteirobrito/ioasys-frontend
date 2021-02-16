/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import BookDetailModal from '../BookDetailModal';

const renderBookDetailModal = () => {
  const onButtonClick = jest.fn();

  return render(
    <BookDetailModal onClose={onButtonClick} visible={false}>
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
