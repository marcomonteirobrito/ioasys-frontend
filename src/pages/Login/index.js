import React, { useState } from 'react';

import Input from '../../components/Input';
import {
  Container,
  Title,
  LoginContainer,
  HeaderContainer,
  LogoContainer,
} from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <LoginContainer>
        <HeaderContainer>
          <LogoContainer />
          <Title>Books</Title>
        </HeaderContainer>

        <Input
          inputTitle="Email"
          inputType="email"
          placeholder="Digite seu melhor e-mail"
          onChange={(event) => setEmail(event.value)}
          value={email}
        />
        <Input
          inputTitle="Senha"
          inputType="password"
          placeholder="Digite sua senha"
          onChange={(event) => setPassword(event.value)}
          value={password}
          button
        />
      </LoginContainer>
    </Container>
  );
}

export default Login;
