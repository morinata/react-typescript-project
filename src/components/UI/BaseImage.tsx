import React, {FC} from 'react';

interface IProps {
  src: any;
  alt?: string;
  className?: string;
}

const BaseImage: FC<IProps> = ({src, alt, className, ...other}) => (
  <img src={src} alt={alt} className={className} {...other} />
);

export default BaseImage;