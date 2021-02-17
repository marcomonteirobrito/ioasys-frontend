import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffff;
  border-radius: 4px;
  width: 272px;
  height: 160px;

  cursor: pointer;
`;
export const BookContainer = styled.div`
  max-width: 244px;
  max-height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BookImage = styled.img`
  background: ${(props) => `url(${props.imageUrl})`} no-repeat;
  width: 81px;
  height: 122px;
  background-position: center;
  background-size: cover;
`;

export const BookDetail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 143px;
  height: 122px;
  margin-left: 16px;
`;
export const BookTitle = styled.span`
  width: 127px;
  height: 20px;
  color: ${Colors.black};
  /* margin-bottom: 2px; */

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const BookAuthor = styled.span`
  color: ${Colors.authorBookDetail};
  width: 127px;
  height: 16px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
`;
export const BookInformations = styled.div`
  height: 60px;
  width: 120px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
export const BookSpan = styled.span`
  color: ${Colors.detailBook};
  font-size: 12px;
`;

export const DetailSpan = styled.span``;
