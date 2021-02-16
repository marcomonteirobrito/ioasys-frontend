import styled from 'styled-components';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 1175px;
  margin-top: 16px;

  @media (min-width: 1600px) {
    width: 1400px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Pages = styled.span``;

export const Button = styled.div`
  border: solid 1px rgba(51, 51, 51, 0.2);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 0px 0px 16px;
`;
export const ButtonLeft = styled(FiChevronLeft)`
  cursor: ${(props) => props.disableButtonLeft && 'not-allowed'};
  color: ${(props) =>
    props.disableButtonLeft ? 'rgba(51, 51, 51, 0.2)' : 'black'};
`;
export const ButtonRight = styled(FiChevronRight)`
  cursor: ${(props) => props.disableButtonRight && 'not-allowed'};
  color: ${(props) =>
    props.disableButtonRight ? 'rgba(51, 51, 51, 0.2)' : 'black'};
`;
