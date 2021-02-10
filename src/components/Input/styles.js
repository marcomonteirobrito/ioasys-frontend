import styled from 'styled-components';

import Colors from '../../utils/Colors';

export const InputValue = styled.input`
  border: none;
  box-shadow: none;
  background: none;

  color: ${Colors.white};

  ::placeholder {
    color: ${Colors.white};
    opacity: 0.5;
    size: 12px;
    line-height: 16px;
  }
`;

export const Label = styled.div`
  color: ${Colors.white};
  opacity: 0.5;
  size: 12px;
  line-height: 16px;
  margin: 8px 0px 4px 16px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Button = styled.button`
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
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;

  padding: 0 15px;
  width: 368px;
  height: 60px;
  margin-bottom: 16px;

  background: ${Colors.black32};

  &:hover {
    ${InputValue} {
      display: flex;
    }
  }
`;
