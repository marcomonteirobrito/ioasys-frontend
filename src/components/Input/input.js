/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/button';

import { Container, Label, InputField, InputContainer } from './styles';

/**
 * @param {string} id - Identificação unica do elemento
 * @param {string} name - Nome do elemento
 * @param {string} className - ClassName do elemento
 * @param {string} type - Tipo do input
 * @param {string} inputTitle - Titulo do input
 * @param {string} placeholder - Texto a ser mostrado quando o elemento não tem valor
 * @param {array} value - Valor do elemento
 * @param {event} onChange - Função chamada quando o valor é alterado
 * @param {event} buttonClick - Função chamada quando clicar no botão
 * @param {boolean} button - Se verdadeiro, insere um botão no input
 * @param {boolean} loading - Habilita o loading
 */

const Input = ({
  id,
  name,
  className,
  type,
  inputTitle,
  onChange,
  value,
  placeholder,
  button,
  buttonClick,
  loading,
  disabledButton,
}) => (
  <Container className={className}>
    <InputContainer>
      <Label>{inputTitle}</Label>
      <InputField
        id={id}
        name={name}
        className={className}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </InputContainer>

    {button && (
      <Button onClick={buttonClick} loading={loading} disabled={disabledButton}>
        Entrar
      </Button>
    )}
  </Container>
);

Input.propTypes = {
  type: PropTypes.string,
  inputTitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  buttonClick: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  loading: PropTypes.bool,
  disabledButton: PropTypes.bool,
};

Input.defaultProps = {
  name: 'input',
  className: 'input-container',
  id: 'input',
  type: 'text',
  placeholder: '',
  buttonClick: () => {},
  loading: false,
  disabledButton: false,
};

export default Input;
