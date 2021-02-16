/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../Button';

const renderButton = () => {
  const onButtonClick = jest.fn();
  return render(
    <Button onClick={onButtonClick} loading={false}>
      Entrar
    </Button>
  );
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

  it('Deve habilitar o loading', () => {
    const onButtonClick = jest.fn();
    render(
      <Button onClick={onButtonClick} loading>
        Entrar
      </Button>
    );

    const loading = screen.queryByRole('progressbar');

    expect(loading).toBeDefined();
  });

  it('NÃO deve habilitar o loading', () => {
    const onButtonClick = jest.fn();
    render(
      <Button onClick={onButtonClick} loading={false}>
        Entrar
      </Button>
    );

    const loading = screen.queryByRole('progressbar');

    expect(loading).toBeNull();
  });
});
