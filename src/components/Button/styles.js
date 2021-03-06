import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const ButtonContainer = styled.button`
  width: 85px;
  height: 36px;
  margin: 12px;
  background: ${Colors.white};
  color: ${Colors.buttonLabelColor};
  border-radius: 44px;
  border: none;

  :hover {
    opacity: 0.9;
  }

  :disabled {
    cursor: not-allowed;
    color: #c7c7cc;
  }
`;
