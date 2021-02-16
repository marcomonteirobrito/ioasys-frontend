import React from 'react';

import Modal from '../Modal/modal';

import {
  Container,
  ImageBookContainer,
  DetailBookContainer,
  BookTitle,
  BookAuthors,
  BookInformationsContainer,
  BookInformations,
  InformationsSpan,
  Title,
  Result,
  DescriptionContainer,
  Description,
  QuotesIcon,
  SubTitle,
} from './styles';

const detailBookModal = ({ visible, onClose }) => (
  <Modal visible={visible} onClose={onClose}>
    <Container>
      <ImageBookContainer>Image</ImageBookContainer>
      <DetailBookContainer>
        <BookTitle>
          Titulo do com nome grande demais da conta so pra ver
        </BookTitle>
        <BookAuthors>Autores</BookAuthors>
        <BookAuthors>Autores</BookAuthors>
        <BookAuthors>Autores</BookAuthors>
        <BookInformationsContainer>
          <SubTitle>INFORMAÇÕES</SubTitle>
          <BookInformations>
            <InformationsSpan>
              <Title>Páginas</Title>
              <Result>300 páginas</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>Editora</Title>
              <Result>Editora Marco</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>Publicação</Title>
              <Result>2020</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>Idioma</Title>
              <Result>Inglês</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>Título Original</Title>
              <Result>Change By Design</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>ISBN-10</Title>
              <Result>123456789</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>ISBN-13</Title>
              <Result>123456789</Result>
            </InformationsSpan>
          </BookInformations>
        </BookInformationsContainer>
        <SubTitle>RESENHA DA EDITORA</SubTitle>
        <DescriptionContainer>
          <QuotesIcon />
          <Description>
            Repellat velit neque delectus mollitia. Et eos nostrum id blanditiis
            odio sed. Dolorem atque sit tempora et excepturi sint suscipit at.\n
            \rAb voluptatum possimus. Culpa laborum consequuntur sit molestiae
            repellendus eos distinctio. Asperiores quia consectetur perspiciatis
            nobis et exercitationem hic distinctio.
          </Description>
        </DescriptionContainer>
      </DetailBookContainer>
    </Container>
  </Modal>
);

export default detailBookModal;
