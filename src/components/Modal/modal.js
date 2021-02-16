import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { IoMdClose } from 'react-icons/io';

import Colors from '../../commons/Colors';

const ModalResponsive = ({ children, visible, onClose }) =>
  visible && (
    <Container>
      <CloseIconContainer onClick={onClose}>
        <CloseIconField>
          <CloseIcon />
        </CloseIconField>
      </CloseIconContainer>
      <ModalWindow>
        <ModalContainer>{children}</ModalContainer>
      </ModalWindow>
    </Container>
  );

ModalResponsive.propTypes = {
  children: PropTypes.element,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

ModalResponsive.defaultProps = {
  children: <div />,
};

const ModalWindow = styled.div`
  height: 608px;
  margin-bottom: 60px;
`;

const Container = styled.div`
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

const ModalContainer = styled.div`
  background-color: ${Colors.white};
  border-radius: 4px;

  height: fit-content;

  margin: 5vh;
`;

const CloseIcon = styled(IoMdClose)``;

const CloseIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-right: 32px;
`;

const CloseIconField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${Colors.white};
  cursor: pointer;
`;

export default ModalResponsive;
