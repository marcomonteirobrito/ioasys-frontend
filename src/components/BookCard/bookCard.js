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

const BookCard = ({ bookData, idBookCard }) => (
  <Container id={idBookCard} data-testid="bookContainer">
    <BookContainer>
      <BookImage>teste</BookImage>
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
  idBookCard: PropTypes.string,
};

BookCard.defaultProps = {
  idBookCard: 'book-card',
};

export default BookCard;
