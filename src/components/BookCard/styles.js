import styled from 'styled-components';

// import Teste from '../../assets/teste.jpg';
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
  width: 224px;
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BookImage = styled.div`
  width: 81px;
  height: 122px;
`;
export const BookDetail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 143px;
  max-height: 122px;
  margin-left: 16px;
`;
export const BookTitle = styled.span`
  max-width: 127px !important;
  height: 20px;
  color: ${Colors.black};
  margin-bottom: 2px;
`;
export const BookAuthor = styled.span`
  color: ${Colors.authorBookDetail};
  width: 127px;
  height: 20px;
`;
export const BookInformations = styled.div`
  height: 60px;
  width: 104px;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;
export const BookSpan = styled.span`
  color: ${Colors.detailBook};
`;
export const DetailSpan = styled.span``;
