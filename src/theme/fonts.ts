import {css} from 'styled-components';

export const attenFont = css`
  font-family: 'Atten New', serif;
`;

export const regularWeight = css`
  font-weight: normal;
`;

export const mediumWeight = css`
  font-weight: 500;
`;

export const boldWeight = css`
  font-weight: bold;
`;

export const xsmallFontSize = css`
  font-size: 10px;
`;

export const smallFontSize = css`
  font-size: 12px;
`;

export const regularFontSize = css`
  font-size: 14px;
`;

export const mediumFontSize = css`
  font-size: 16px;
`;

export const largeFontSize = css`
  font-size: 18px;
`;

export const headerXSmallFontSize = css`
  font-size: 22px;
`;

export const headerSmallFontSize = css`
  font-size: 26px;
`;

export const headerMediumFontSize = css`
  font-size: 30px;
`;

export const headerLargeFontSize = css`
  font-size: 38px;
`;

export const font_xsmall = css`
  ${attenFont}
  ${regularWeight}
  ${xsmallFontSize}
`;

export const font_small = css`
  ${attenFont}
  ${regularWeight}
  ${smallFontSize}
`;

export const font_regular = css`
  ${attenFont}
  ${regularWeight}
  ${regularFontSize}
`;

export const font_medium = css`
  ${attenFont}
  ${regularWeight}
  ${mediumFontSize}
`;

export const font_large = css`
  ${attenFont}
  ${regularWeight}
  ${largeFontSize}
`;

export const font_header_xsmall = css`
  ${attenFont}
  ${boldWeight}
  ${headerXSmallFontSize}
`;

export const font_header_small = css`
  ${attenFont}
  ${boldWeight}
  ${headerSmallFontSize}
`;

export const font_header_medium = css`
  ${attenFont}
  ${boldWeight}
  ${headerMediumFontSize}
`;

export const font_header_large = css`
  ${attenFont}
  ${boldWeight}
  ${headerLargeFontSize}
`;
