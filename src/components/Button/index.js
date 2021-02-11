import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer } from './styles';

/**
 * @param {string} className - ClassName do elemento
 * @param {function} onClick - Função a ser chamada no evento de click
 * @param {boolean} disabled - Indica se o botão deve ficar desabilitado
 * @param {boolean} loading - Indica se o botão deve apresentar loading
 * @param {string} children - Conteúdo dentro do botão
 */

const Button = ({ className, onClick, disabled, children }) => (
  <ButtonContainer
    className={className}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </ButtonContainer>
);
Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

Button.defaultProps = {
  className: 'button-container',
  disabled: false,
  children: 'Entrar',
};

export default Button;
