import styled from 'styled-components';
import { VscTriangleUp } from 'react-icons/vsc';

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

export const ErrorArrow = styled(VscTriangleUp)`
  color: ${Colors.backgroundErrorContainer};
  background: none;
  width: 16px;
  height: 16px;
  margin: 4px 0px -5.14px 16px;
`;
