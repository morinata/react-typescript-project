import React, {FC, ChangeEvent} from 'react';
import styled from 'styled-components';
import Input from '@mui/material/Input';
import {font_medium} from '../../theme/fonts';
import Colors from '../../theme/colors';

const {grey080, blue100, red100} = Colors;

interface IProps {
  value?: string | number;
  name?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  endAdornment?: any
}

const BaseInput: FC<IProps> = ({
  value,
  type,
  name,
  placeholder,
  disabled,
  onChange,
  endAdornment,
  ...other
}) => (
  <Wrapper
    value={value} type={type}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    endAdornment={endAdornment}
    {...other} />
);

const Wrapper = styled(Input)`
  ${font_medium};
  border: 1px solid ${grey080};
  border-radius: 4px;
  padding: 5px 10px;
  margin-bottom: 15px;
  
  &:hover,
  &.Mui-focused {
    border-color: ${blue100};
  }
  
  &::before,
  &::after {
    display: none;
  }
  
  & input {
    ${font_medium};
    padding: 0;
  }
  
  &.Mui-error {
    border-color: ${red100};
  }
`;

export default BaseInput;