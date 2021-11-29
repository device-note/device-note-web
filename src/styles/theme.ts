import { css } from 'styled-components';

export const fontSizeTheme = {
  xs: css`
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  sm: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  base: css`
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  lg: css`
    font-size: 1.125rem;
    line-height: 1.5rem;
  `,
  xl: css`
    font-size: 1.25rem;
    line-height: 1.75rem;
  `,
  xxl: css`
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  xxxl: css`
    font-size: 1.875rem;
    line-height: 2.25rem;
  `,
  xxxxl: css`
    font-size: 2.25rem;
    line-height: 2.5rem;
  `,
  xxxxxl: css`
    font-size: 3rem;
    line-height: 1;
  `,
} as const;

export const fontWeightTheme = {
  thin: css`
    font-weight: 100;
  `,
  extralight: css`
    font-weight: 200;
  `,
  light: css`
    font-weight: 300;
  `,
  normal: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
  extrabold: css`
    font-weight: 800;
  `,
  black: css`
    font-weight: 900;
  `,
} as const;

export const breakpointSizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

export const breakpointQueries = {
  sm: `(min-width: ${breakpointSizes.sm})`,
  md: `(min-width: ${breakpointSizes.md})`,
  lg: `(min-width: ${breakpointSizes.lg})`,
  xl: `(min-width: ${breakpointSizes.xl})`,
  xxl: `(min-width: ${breakpointSizes.xxl})`,
};

export interface CustomThemeType {
  font: {
    size: typeof fontSizeTheme;
    weight: typeof fontWeightTheme;
  };
  breakpoint: {
    size: typeof breakpointSizes;
    query: typeof breakpointQueries;
  };
}

export const defaultTheme: CustomThemeType = {
  font: {
    size: fontSizeTheme,
    weight: fontWeightTheme,
  },
  breakpoint: {
    size: breakpointSizes,
    query: breakpointQueries,
  },
};
