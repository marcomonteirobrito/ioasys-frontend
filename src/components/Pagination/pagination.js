import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Pages,
  Button,
  ButtonLeft,
  ButtonRight,
  PaginateContainer,
} from './styles';

/**
 * @param {string} id - Identificação unica do elemento
 * @param {string} className - ClassName do elemento
 * @param {number} page - Número da página atual
 * @param {number} pageLength - Número total de páginas
 * @param {event} onClickButtonLeft - Função chamada ao clicar no botão esquerdo
 * @param {event} onClickButtonRight - Função chamada ao clicar no botão direito
 * @param {boolean} disableButtonLeft - Desabilita o botão esquerdo
 * @param {boolean} disableButtonRight - Desabilita o botão direito
 */

const Pagination = ({
  id,
  className,
  page,
  pageLength,
  onClickButtonLeft,
  onClickButtonRight,
  disableButtonLeft,
  disableButtonRight,
}) => (
  <PaginateContainer>
    <Container id={id} className={className}>
      <Pages>
        Página <strong>{page}</strong> de <strong>{pageLength}</strong>
      </Pages>

      <Button data-testid="button-left" onClick={onClickButtonLeft}>
        <ButtonLeft disableButtonLeft={disableButtonLeft} />
      </Button>

      <Button data-testid="button-right" onClick={onClickButtonRight}>
        <ButtonRight disableButtonRight={disableButtonRight} />
      </Button>
    </Container>
  </PaginateContainer>
);

Pagination.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  page: PropTypes.number.isRequired,
  pageLength: PropTypes.number.isRequired,
  onClickButtonLeft: PropTypes.func.isRequired,
  onClickButtonRight: PropTypes.func.isRequired,
  disableButtonRight: PropTypes.bool.isRequired,
  disableButtonLeft: PropTypes.bool.isRequired,
};

Pagination.defaultProps = {
  id: 'pagination',
  className: 'pagination-container',
};

export default Pagination;
