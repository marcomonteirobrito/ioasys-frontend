/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../button';

const renderButton = () => {
  const onButtonClick = jest.fn();
  return render(<Button onClick={onButtonClick}>Entrar</Button>);
};

describe('Button', () => {
  it('Deve renderizar o componente corretamente', () => {
    renderButton();

    expect(document.body).toMatchSnapshot();
  });

  it('Deve incluir children', () => {
    renderButton();

    const children = screen.queryByText('Entrar');

    expect(children).toBeDefined();
  });

  it('Deve chamar onClick ao clicar no botão', () => {
    const onButtonClick = jest.fn();
    render(<Button onClick={onButtonClick}>Entrar</Button>);

    const children = screen.queryByText('Entrar');
    fireEvent.click(children);

    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
