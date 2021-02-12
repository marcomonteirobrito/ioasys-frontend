/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import Input from '../../components/Input';

import {
  Container,
  Title,
  LoginContainer,
  HeaderContainer,
  LogoContainer,
  ErrorField,
} from './styles';

import { getAuthLogin } from './authApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authFailed, setAuthFailed] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    if (email === '' && password === '') {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [email, password]);

  const handleLogin = async () => {
    try {
      await getAuthLogin({ email, password });
    } catch (err) {
      console.error('Falha no login');
      setAuthFailed(true);
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const teste = await loginApi();
  //     console.log(teste);
  //   } catch (err) {
  //     console.error('Falha no login');
  //     setAuthFailed(true);
  //   }
  // };

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
