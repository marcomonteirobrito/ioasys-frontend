import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

import Colors from '../../commons/Colors';

export const ModalWindow = styled.div`
  height: 608px;
  margin-bottom: 60px;
`;

export const Container = styled.div`
  position: fixed;
  z-index: 9997;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.4);

  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  overflow-y: auto;
  overflow-x: hidden;
`;

export const ModalContainer = styled.div`
  background-color: ${Colors.white};
  border-radius: 4px;

  height: fit-content;

  margin: 5vh;
`;

export const CloseIcon = styled(IoMdClose)``;

export const CloseIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-right: 32px;
`;

export const CloseIconField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${Colors.white};
  cursor: pointer;
`;
