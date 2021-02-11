import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';
import { ButtonContainer } from './styles';

/**
 * @param {string} className - ClassName do elemento
 * @param {function} onClick - Função a ser chamada no evento de click
 * @param {boolean} disabled - Indica se o botão deve ficar desabilitado
 * @param {boolean} loading - Indica se o botão deve apresentar loading
 * @param {string} children - Conteúdo dentro do botão
 */

const Button = ({ className, onClick, disabled, loading, children }) =>
  loading ? (
    <Loading strokeWidth="5" />
  ) : (
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
  loading: PropTypes.bool,
  children: PropTypes.string,
};

Button.defaultProps = {
  className: 'button-container',
  disabled: false,
  children: 'Entrar',
  loading: false,
};

export default Button;
