import * as stylex from "@stylexjs/stylex";

const DARK = '@media (prefers-color-scheme: dark)';

export const body = stylex.create({
  root: {
    backgroundColor: {
      default: '#f0f0f0',
      [DARK]: '#444'
    },
    color: {
      default: '#333',
      [DARK]: '#fff'
    },
  }
})
