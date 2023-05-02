interface ISizes {
  xs: string;
  sm: string;
  md: string;
  lt: string;
  lg: string;
  xl: string;
}

export const size: ISizes = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lt: '1024px',
  lg: '1200px',
  xl: '1440px',
};

const breakpoints = {
  maxXs: `(max-width: ${size.xs})`,
  maxSm: `(max-width: ${size.sm})`,
  maxMd: `(max-width: ${size.md})`,
  maxLt: `(max-width: ${size.lt})`,
  maxLg: `(max-width: ${size.lg})`,
  maxXl: `(max-width: ${size.xl})`,
  minXs: `(min-width: ${size.xs})`,
  minSm: `(min-width: ${size.sm})`,
  minMd: `(min-width: ${size.md})`,
  minLt: `(min-width: ${size.lt})`,
  minLg: `(min-width: ${size.lg})`,
  minXl: `(min-width: ${size.xl})`,
};

export default breakpoints;