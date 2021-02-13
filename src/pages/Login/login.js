/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import loginSchemaValidate from '../../commons/loginSchema';

import Input from '../../components/Input/input';

import {
  Container,
  Title,
  LoginContainer,
  HeaderContainer,
  LogoContainer,
  ErrorField,
} from './styles';

import { getAuthLogin } from '../../auth/authLoginApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authFailed, setAuthFailed] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    if (email.length === 0 && password.length === 0) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [email, password]);

  const validateLoginSchema = async (requestBody) => {
    try {
      await loginSchemaValidate.validate(requestBody);
    } catch (err) {
      throw new Error(err);
    }
  };

  const saveTokenLocalStorage = async (response) => {
    try {
      localStorage.setItem('token', response.headers.authorization);
      localStorage.setItem('refresh-token', response.headers.refresh.token);
    } catch (err) {
      throw new Error({ error: 'Erro ao salvar token', detail: err });
    }
  };

  const handleLogin = async () => {
    try {
      const requestBody = { email, password };
      await validateLoginSchema(requestBody);

      const response = await getAuthLogin(requestBody);
      await saveTokenLocalStorage(response);
    } catch (err) {
      setAuthFailed(true);
    }
  };

  console.log(email);
  console.log(password);

  return (
    <Container>
      <LoginContainer>
        <HeaderContainer>
          <LogoContainer />
          <Title>Books</Title>
        </HeaderContainer>

        <Input
          id="input-email"
          name="email"
          className="input-email"
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="teste"
          inputTitle="Email"
          button={false}
        />

        <Input
          id="input-password"
          name="password"
          className="input-password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="teste"
          inputTitle="Senha"
          button
          buttonClick={handleLogin}
          disabledButton={disabledButton}
        />

        {authFailed && <ErrorField>Email e/ou senha incorretos.</ErrorField>}
      </LoginContainer>
    </Container>
  );
};

export default Login;
