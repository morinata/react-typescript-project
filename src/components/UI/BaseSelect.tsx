import React, {FC, ReactNode} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

export interface IOptionProps {
  value: string | number;
  label: string;
}

interface IProps {
  options: IOptionProps[];
  onChange: (event: SelectChangeEvent<string | number>) => void;
  value?: string | number;
  defaultValue?: string;
  renderValue?: (value: string | number) => ReactNode;
  displayEmpty?: boolean;
  disabled?: boolean;
  placeholder?: string;
  multiple?: boolean;
}

const BaseSelect: FC<IProps> = ({
  options,
  onChange,
  value: selectedValue,
  defaultValue,
  renderValue,
  displayEmpty,
  disabled,
  placeholder,
  multiple,
  ...other
}) => (
  <FormControl>
    <Select
      {...other}
      displayEmpty
      value={selectedValue}
      onChange={onChange}
      multiple={multiple}
      defaultValue={defaultValue}
    >
      <MenuItem disabled value="">
        <em>{defaultValue}</em>
      </MenuItem>
      {options.map(({value, label}) => (
        <MenuItem
          key={value}
          value={value}
        >
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default BaseSelect;
