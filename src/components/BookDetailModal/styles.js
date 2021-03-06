import styled from 'styled-components';
import { ImQuotesLeft } from 'react-icons/im';

import Colors from '../../commons/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 769px;
  height: 608px;
`;
export const ImageBookContainer = styled.img`
  width: 349px;
  height: 512px;
  margin-left: 32px;
  margin-right: 16px;

  background: ${(props) => `url(${props.imageUrl})`} no-repeat;
  background-position: center;
  background-size: cover;
`;
export const DetailBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 349px;
  height: 512px;
  margin-right: 32px;
`;
export const BookTitle = styled.div`
  font-size: 28px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 349px;
`;
export const BookAuthors = styled.span`
  color: ${Colors.authorBookDetail};
  size: 8px;
  line-height: 20px;
`;

export const SubTitle = styled.h5``;

export const BookInformationsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 32px 0px 20px 0px;
`;

export const BookInformations = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InformationsSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 12px;
`;
export const Result = styled.div`
  color: ${Colors.detailBook};
  font-size: 12px;
  line-height: 20px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 10px;
`;
export const Description = styled.div`
  width: 330px;
  margin-left: 4px;
  color: ${Colors.detailBook};
`;

export const QuotesIcon = styled(ImQuotesLeft)``;
