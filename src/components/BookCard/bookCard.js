import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ImageContainer,
  BookImage,
  DetailContainer,
  DetailHeader,
  Title,
  Authors,
  DetailBody,
  DetailSpan,
} from './styles';

const BookCard = ({ booksData, idBookCard }) => (
  <Container id={idBookCard}>
    <ImageContainer>
      <BookImage src={booksData.imageURL} />
    </ImageContainer>
    <DetailContainer>
      <DetailHeader>
        <Title>{booksData.title}</Title>
        {booksData.authors?.map((author) => (
          <Authors>{author}</Authors>
        ))}
      </DetailHeader>

      <DetailBody>
        <DetailSpan>{booksData.pageCount}</DetailSpan>
        <DetailSpan>{booksData.publisher}</DetailSpan>
        <DetailSpan>{booksData.published}</DetailSpan>
      </DetailBody>
    </DetailContainer>
  </Container>
);

BookCard.propTypes = {
  booksData: PropTypes.objectOf(PropTypes.object).isRequired,
  idBookCard: PropTypes.string,
};

BookCard.defaultProps = {
  idBookCard: 'book-card',
};

export default BookCard;
