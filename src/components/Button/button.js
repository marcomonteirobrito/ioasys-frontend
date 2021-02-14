import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import Colors from '../../commons/Colors';
import { ButtonContainer } from './styles';

/**
 * @param {string} className - ClassName do elemento
 * @param {function} onClick - Função a ser chamada no evento de click
 * @param {boolean} disabled - Indica se o botão deve ficar desabilitado
 * @param {boolean} loading - Indica se o botão deve apresentar loading
 * @param {string} children - Conteúdo dentro do botão
 * @param {string} loading - Habilita o loading dentro do botão
 */

const Button = ({ className, onClick, disabled, children, loading }) => (
  <ButtonContainer
    className={className}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {loading ? (
      <CircularProgress color={Colors.loadingButtonlogin} size={24} />
    ) : (
      children
    )}
  </ButtonContainer>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  className: 'button-container',
  disabled: false,
  children: 'Entrar',
  loading: false,
};

export default Button;
