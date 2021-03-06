import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const InputField = styled.input`
  border: none;
  box-shadow: none;
  background: none;
  width: ${(props) => !props.button && '330px'};

  color: ${Colors.white};

  ::placeholder {
    color: ${Colors.white};
    opacity: 0.5;
    size: 12px;
    line-height: 16px;
  }
`;

export const Label = styled.label`
  color: ${Colors.white};
  opacity: 0.5;
  size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
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
`;
