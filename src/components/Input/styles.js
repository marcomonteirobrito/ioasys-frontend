import styled from 'styled-components';

import Colors from '../../utils/Colors';

export const InputField = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4px;
  flex-direction: column;

  padding: 0 15px;
  width: 100%;
  height: 60px;

  background: ${Colors.black32};
`;

export const InputValue = styled.input`
  border: none;
  box-shadow: none;
  background: none;

  color: ${Colors.white};
`;

export const Label = styled.div`
  color: ${Colors.white};
  opacity: 0.5;
  size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;
