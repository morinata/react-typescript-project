import React from 'react';
import BaseImage from '../components/UI/BaseImage';
import NotFoundImg from '../assets/images/404page.webp';
import styled from 'styled-components';

const NotFound = () => (
  <div>
    <Image src={NotFoundImg} alt="img" />
  </div>
);

const Image = styled(BaseImage)`
  width: 100%;
`;

export default NotFound;