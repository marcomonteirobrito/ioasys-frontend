/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import DetailBookModal from '../detailBookModal';

const renderDetailBookModal = () => {
  const onButtonClick = jest.fn();

  return render(
    <DetailBookModal onClose={onButtonClick} visible={false}>
      Entrar
    </DetailBookModal>
  );
};

describe('DetailBookModal', () => {
  it('Deve renderizar o componente corretamente', () => {
    renderDetailBookModal();

    expect(document.body).toMatchSnapshot();
  });
});
