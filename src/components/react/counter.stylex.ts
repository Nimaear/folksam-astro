import * as stylex from "@stylexjs/stylex";

export const card = stylex.create({
  root: {
    borderRadius: '4px',
    border: '1px solid #e5e5e5',
    padding: '16px',
  }
})

export const button = stylex.create({
  root: {
    border: 'solid 1px #777',
    padding: '8px',
    background: '#ccc',
    borderRadius: '4px',
    transition: 'background 0.3s',
    cursor: 'pointer',
    ':hover': {
      background: '#eee',
    }
  }
});
