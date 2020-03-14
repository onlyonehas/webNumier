import { css } from 'styled-components';

export const breakpoints: any = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
};

export const size = (size: any, styles: string): string =>
  `@media(min-width:${breakpoints[size]}){${styles}}`
