import React, {FC} from 'react';
import styled from 'styled-components';
import SvgIcon from '@mui/material/SvgIcon';

interface IProps {
  icon: any;
  fill?: string;
  boxW?: number | string;
  boxH?: number | string;
  onClick?: () => void;
}

const BaseIcon: FC<IProps> = ({icon, fill = '#000', boxW = 24, boxH = 24, ...other}) => (
  <Icon>
    <SvgIcon component={icon} fill={fill} viewBox={`0 0 ${boxW} ${boxH}`} {...other} />
  </Icon>
);

const Icon = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
`;

export default BaseIcon;
