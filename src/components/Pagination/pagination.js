import React from 'react';
import PropTypes from 'prop-types';

import { Container, Pages, Button, ButtonLeft, ButtonRight } from './styles';

const Pagination = ({
  page,
  pageLength,
  onClickButtonLeft,
  onClickButtonRight,
  disableButtonLeft,
  disableButtonRight,
}) => (
  <Container>
    <Pages>
      Página <strong>{page}</strong> de <strong>{pageLength}</strong>
    </Pages>

    <Button onClick={onClickButtonLeft}>
      <ButtonLeft disableButtonLeft={disableButtonLeft} />
    </Button>

    <Button>
      <ButtonRight
        onClick={onClickButtonRight}
        disableButtonRight={disableButtonRight}
      />
    </Button>
  </Container>
);

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageLength: PropTypes.number.isRequired,
  onClickButtonLeft: PropTypes.func.isRequired,
  onClickButtonRight: PropTypes.func.isRequired,
  disableButtonRight: PropTypes.bool.isRequired,
  disableButtonLeft: PropTypes.bool.isRequired,
};

export default Pagination;
