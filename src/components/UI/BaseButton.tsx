import React, {FC, MouseEvent, ReactNode} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Colors from '../../theme/colors';

const {blue100, blue050, blue030, white000} = Colors;

interface IProps {
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode | string;
  disableRipple?: boolean;
  href?: string;
  className?: string;
}

const BaseButton: FC<IProps> = ({children, disableRipple, disabled, href, className, onClick, ...other}) => (
  <Wrapper href={href} onClick={onClick} disableRipple={disableRipple} disabled={disabled} className={className} {...other}>
    {children}
  </Wrapper>
);

const Wrapper = styled(Button)`
  &.purple {
    border: 1px solid ${blue100};
    background-color: ${blue050};
    color: ${white000};
    padding: 2px 10px;

    &:hover {
      background-color: ${blue030};
      color: ${blue100};
    }
  }
  
  &.purple__light {
    border: 1px solid ${blue030};
    background-color: ${blue030};
    color: ${blue100};
    padding: 2px 10px;

    &:hover {
      background-color: ${blue030};
      color: ${blue100};
    }
  }
`;

export default BaseButton;