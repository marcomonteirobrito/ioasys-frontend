import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.backgroundErrorContainer};
  border-radius: 4px;
  width: 239px;
  height: 48px;
`;

export const ErrorMessageContainer = styled.div`
  color: ${Colors.white};
  font-weight: 700;
`;

export const ErrorArrow = styled.div`
  background: ${Colors.backgroundErrorContainer};
  width: 16px;
  height: 16px;
  margin: 16px 0px -8px 16px;
  transform: rotate(45deg);
`;
