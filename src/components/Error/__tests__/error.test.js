/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Error from '../Error';

const renderError = () =>
  render(
    <Error id="error" className="error-container" message="Erro no login" />
  );

describe('Error', () => {
  it('Deve renderizar o componente corretamente', () => {
    renderError();

    expect(document.body).toMatchSnapshot();
  });

  it('Deve renderizar mensagem corretamente', () => {
    renderError();

    const errorMessage = screen.queryByPlaceholderText('Erro no login');

    expect(errorMessage).toBeDefined();
  });
});
