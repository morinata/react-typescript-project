import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Colors from '../../theme/colors';

const {white000} = Colors;

interface IModalProps {
  children: ReactNode;
  handleOpen: boolean;
  handleClose: (open: boolean) => void;
}

const BaseModal: FC<IModalProps> = ({children, handleOpen, handleClose}) => (
  <Wrapper
    open={handleOpen}
    onClose={handleClose}
  >
    <Content>
      {children}
    </Content>
  </Wrapper>
);

const Wrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${white000};
  border-radius: 10px;
  width: 500px;
  padding: 30px;
`;

export default BaseModal;