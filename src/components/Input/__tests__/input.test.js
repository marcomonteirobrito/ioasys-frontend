/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '../input';

const renderInput = () =>
  render(
    <Input
      type="text"
      inputTitle="Email"
      onChange={jest.fn()}
      value="marco_monteiro@live.com"
      placeholder="Insira seu email"
      button={false}
      buttonClick={jest.fn()}
      loading={false}
      disabledButton
    />
  );

describe('Input', () => {
  it('Deve renderizar o componente corretamente', () => {
    renderInput();

    expect(document.body).toMatchSnapshot();
  });

  it('NÃO deve renderizar o botão', () => {
    renderInput();

    const button = screen.queryByTestId('button');

    expect(button).toBeNull();
  });

  it('Deve renderizar o botão', () => {
    render(
      <Input
        type="text"
        inputTitle="Email"
        onChange={jest.fn()}
        value="marco_monteiro@live.com"
        placeholder="Insira seu email"
        button={false}
        buttonClick={jest.fn()}
        loading
        disabledButton
      />
    );

    const button = screen.queryByTestId('button');

    expect(button).toBeDefined();
  });
});
