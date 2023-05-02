import React, {FC} from 'react';
import styled from 'styled-components';
import Colors from '../../theme/colors';

const {blue100} = Colors;

interface IProps {
  speed?: number | string;
  height?: number | string;
  width?: number | string;
}

const BaseLoader: FC<IProps> = ({speed = 0.75, height = 50, width = 50, ...other}) => (
  <Wrapper>
    <Loader speed={speed} height={height} width={width} {...other} data-qa-auto="spinner" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Loader = styled.div<{speed: number | string; height: number | string; width: number | string}>`
  background: transparent;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: 50%;
  border: 2px solid ${blue100};
  border-bottom-color: transparent !important;
  display: inline-block;
  animation: spin ${({speed}) => speed}s 0s infinite linear;
`;

export default BaseLoader;