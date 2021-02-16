import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BookContainer,
  BookDetail,
  BookImage,
  BookTitle,
  BookAuthor,
  BookInformations,
  BookSpan,
} from './styles';

/**
 * @param {string} className - ClassName do elemento
 * @param {function} onClick - Função a ser chamada no evento de click
 * @param {string} id - Identificador único do componente
 * @param {object} bookData - Informações do livro
 */

const BookCard = ({ bookData, onClick, className, id }) => (
  <Container
    data-testid="bookContainer"
    onClick={onClick}
    className={className}
    id={id}
  >
    <BookContainer>
      <BookImage>{bookData.imageUrl}</BookImage>
      <BookDetail>
        <BookTitle>{bookData.title}</BookTitle>
        {bookData.authors.map((author) => (
          <BookAuthor>{author}</BookAuthor>
        ))}

        <BookInformations>
          <BookSpan>{bookData.pageCount} páginas</BookSpan>
          <BookSpan>{bookData.publisher}</BookSpan>
          <BookSpan>Publicado em {bookData.published}</BookSpan>
        </BookInformations>
      </BookDetail>
    </BookContainer>
  </Container>
);

BookCard.propTypes = {
  bookData: PropTypes.objectOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

BookCard.defaultProps = {
  className: 'book-card',
  id: 'book-card',
};

export default BookCard;
