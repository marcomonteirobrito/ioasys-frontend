/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import loginSchemaValidate from '../../commons/loginSchema';

import Input from '../../components/Input/input';
import ErrorMessage from '../../components/Error/error';

import {
  Container,
  Title,
  LoginContainer,
  HeaderContainer,
  LogoContainer,
} from './styles';

import { getAuthLogin } from '../../auth/authLoginApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authFailed, setAuthFailed] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (email && password) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [email, password]);

  const validateLoginSchema = async (requestBody) => {
    try {
      await loginSchemaValidate.validate(requestBody);
    } catch (err) {
      throw new Error(err.errors);
    }
  };

  const saveTokenLocalStorage = async (response) => {
    try {
      localStorage.setItem('token', response.headers.authorization);
      localStorage.setItem('refresh-token', response.headers['refresh-token']);
    } catch (err) {
      throw new Error({ error: 'Erro ao salvar token', detail: err });
    }
  };

  const handleLogin = async () => {
    try {
      const requestBody = { email, password };
      await validateLoginSchema(requestBody);

      setLoading(true);
      const response = await getAuthLogin(requestBody);
      await saveTokenLocalStorage(response);

      setAuthFailed(false);

      history.push('/dashboard');
    } catch (err) {
      setAuthFailed(true);
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          inputTitle="Email"
          button={false}
          loading={loading}
        />

        <Input
          id="input-password"
          name="password"
          className="input-password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          inputTitle="Senha"
          button
          buttonClick={handleLogin}
          disabledButton={disabledButton}
          loading={loading}
        />

        {authFailed && <ErrorMessage message="Email e/ou senha incorretos." />}
      </LoginContainer>
    </Container>
  );
};

export default Login;
