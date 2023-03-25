import React from 'react';

import { Container } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">enviar</button>
    </Container>
  );
}
