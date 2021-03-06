import React from 'react';
import Proptypes from 'prop-types';

import { ErrorMessageContainer, ErrorContainer, ErrorArrow } from './styles';

/**
 * @param {string} id - Identificação unica do elemento
 * @param {string} className - ClassName do elemento
 * @param {string} message - Mensagem do erro
 */

const ErrorMessage = ({ id, className, message }) => (
  <>
    <ErrorArrow />
    <ErrorContainer id={id} className={className}>
      <ErrorMessageContainer>{message}</ErrorMessageContainer>
    </ErrorContainer>
  </>
);

ErrorMessage.propTypes = {
  message: Proptypes.string.isRequired,
  className: Proptypes.string,
  id: Proptypes.string,
};

ErrorMessage.defaultProps = {
  className: 'error-message',
  id: 'error-message',
};

export default ErrorMessage;
