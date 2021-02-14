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

const BookCard = ({ booksData, idBookCard }) => (
  // <Container id={idBookCard}>
  //   <ImageContainer>
  //     <BookImage image={booksData.imageUrl} />
  //   </ImageContainer>
  //   <DetailContainer>
  //     <DetailHeader>
  //       <Title>{booksData.title}</Title>
  //       {booksData.authors?.map((author) => (
  //         <Authors>{author}</Authors>
  //       ))}
  //     </DetailHeader>

  //     <DetailBody>
  //       <DetailSpan>{booksData.pageCount}</DetailSpan>
  //       <DetailSpan>{booksData.publisher}</DetailSpan>
  //       <DetailSpan>{booksData.published}</DetailSpan>
  //     </DetailBody>
  //   </DetailContainer>
  // </Container>

  <Container id={idBookCard}>
    <BookContainer>
      <BookImage>teste</BookImage>
      <BookDetail>
        <BookTitle>{booksData.title}</BookTitle>
        <BookAuthor>{booksData.authors[0]}</BookAuthor>

        <BookInformations>
          <BookSpan>{booksData.pageCount}</BookSpan>
          <BookSpan>{booksData.publisher}</BookSpan>
          <BookSpan>{booksData.published}</BookSpan>
        </BookInformations>
      </BookDetail>
    </BookContainer>
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
