import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  CloseIconContainer,
  CloseIcon,
  CloseIconField,
  ModalWindow,
  ModalContainer,
} from './styles';

const Modal = ({ children, visible, onClose }) =>
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

Modal.propTypes = {
  children: PropTypes.element,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  children: <div />,
};

export default Modal;
