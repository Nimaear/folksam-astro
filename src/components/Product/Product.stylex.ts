import * as stylex from "@stylexjs/stylex";

const DARK = '@media (prefers-color-scheme: dark)';

export const card = stylex.create({
  root: {
    overflow: 'hidden',
    display: 'block',
    borderRadius: '4px',
    border: {
      default: '1px solid #e5e5e5',
      [DARK]: '1px solid #222'
    },
    backgroundColor: {
      default: '#fff',
      [DARK]: '#333'
    },
    color: {
      default: '#333',
      [DARK]: '#fff'
    },
    cursor: 'pointer',
    textDecoration: 'inherit',
    ':hover': {
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: {
        default: '#f9f9f9',
        [DARK]: '#444'
      },
    }
  },
  content: {
    padding: '16px',
  }
})
