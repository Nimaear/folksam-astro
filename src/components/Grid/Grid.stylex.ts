import * as stylex from "@stylexjs/stylex";

export const grid = stylex.create({
  root: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  }
})
