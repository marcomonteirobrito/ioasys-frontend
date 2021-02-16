import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';

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

/**
 * @param {boolean} visible - Informa se o modal deve estar visível
 * @param {function} onClose - Função a ser chamada quando clicar no botão de fechar o modal
 */

const BookDetailModal = ({ visible, onClose, bookData }) => (
  <Modal visible={visible} onClose={onClose}>
    <Container>
      <ImageBookContainer>{bookData.imageUrl}</ImageBookContainer>
      <DetailBookContainer>
        <BookTitle>{bookData.title}</BookTitle>

        {bookData.authors.map((author) => (
          <BookAuthors>{author}</BookAuthors>
        ))}
        <BookInformationsContainer>
          <SubTitle>INFORMAÇÕES</SubTitle>
          <BookInformations>
            <InformationsSpan>
              <Title>Páginas</Title>
              <Result>{bookData.pageCount} páginas</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>Editora</Title>
              <Result>{bookData.publisher}</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>Publicação</Title>
              <Result>{bookData.published}</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>Idioma</Title>
              <Result>{bookData.language}</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>Título Original</Title>
              <Result>{bookData.title}</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>ISBN-10</Title>
              <Result>{bookData.isbn10}</Result>
            </InformationsSpan>

            <InformationsSpan>
              <Title>ISBN-13</Title>
              <Result>{bookData.isbn13}</Result>
            </InformationsSpan>
          </BookInformations>
        </BookInformationsContainer>
        <SubTitle>RESENHA DA EDITORA</SubTitle>
        <DescriptionContainer>
          <QuotesIcon />
          <Description>{bookData.description}</Description>
        </DescriptionContainer>
      </DetailBookContainer>
    </Container>
  </Modal>
);

BookDetailModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  bookData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BookDetailModal;
