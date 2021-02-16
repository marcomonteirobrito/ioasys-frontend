/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from '../Pagination';

const renderPagination = () =>
  render(
    <Pagination
      page={2}
      pageLength={10}
      onClickButtonLeft={jest.fn()}
      onClickButtonRight={jest.fn()}
      disableButtonLeft={false}
      disableButtonRight={false}
    />
  );

const onClickButtonLeft = jest.fn();
const onClickButtonRight = jest.fn();
const disableButtonLeft = false;
const disableButtonRight = false;

describe('Pagination', () => {
  it('Deve renderizar o componente corretamente', () => {
    renderPagination();

    expect(document.body).toMatchSnapshot();
  });

  it('Deve chamar onClick ao clicar no botão esquerdo', () => {
    render(
      <Pagination
        page={1}
        pageLength={10}
        onClickButtonLeft={onClickButtonLeft}
        onClickButtonRight={onClickButtonRight}
        disableButtonLeft={disableButtonLeft}
        disableButtonRight={disableButtonRight}
      />
    );

    const buttonLeft = screen.getByTestId('button-left');
    fireEvent.click(buttonLeft);

    expect(onClickButtonLeft).toHaveBeenCalledTimes(1);
    expect(onClickButtonRight).toHaveBeenCalledTimes(0);
  });

  it('Deve chamar onClick ao clicar no botão direito', () => {
    render(
      <Pagination
        page={1}
        pageLength={10}
        onClickButtonLeft={onClickButtonLeft}
        onClickButtonRight={onClickButtonRight}
        disableButtonLeft={disableButtonLeft}
        disableButtonRight={disableButtonRight}
      />
    );
    const buttonRight = screen.getByTestId('button-right');
    fireEvent.click(buttonRight);

    expect(onClickButtonRight).toHaveBeenCalledTimes(1);
    expect(onClickButtonLeft).toHaveBeenCalledTimes(0);
  });
});
