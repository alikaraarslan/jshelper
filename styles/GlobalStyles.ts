import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }: any) => ({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: theme.body,
    color: theme.text,
    transition: 'transform 0.2s',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,Ubuntu, Cantarell, "Helvetica Neue", sans-serif;',
    height: '100%',
    overflow: 'hidden',
  },
  '.sidebar': {
    background: theme.bgDark,
    color: theme.text,
    '.rc-collapse > .rc-collapse-item > .rc-collapse-header': {
      color: theme.text,
    },
    '.rc-collapse-content': {
      color: theme.text,
    },
    '.rc-collapse-item.rc-collapse-item-active': {
      background: theme.bg,
    },
  },
  '.page': {
    background: theme.bg,
    color: theme.text,
  },
  '.button-link': {
    transition: '300ms',
    color: theme.text,
    background: theme.bgDark,
    '&:hover': {
      background: darken(0.02, theme.bgDark),
    },
  },
  '.header': {
    background: theme.bgDark,
    '.slider': {
      background: theme.bg,
    },
    input: {
      '&:checked': {
        '+': {
          '.slider': {
            background: darken(0.15, theme.bg),
            '&:before': {
              transform: 'translateX(20px)',
            },
          },
        },
      },
    },
    '.search': {
      input: {
        background: theme.bg,
        color: darken(0.15, theme.text),
        '::placeholder': {
          color: darken(0.15, theme.text),
          opacity: 0.6,
        },
      },
      '.search-button': {
        background: theme.bg,
        color: darken(0.15, theme.text),
      },
    },
  },
  button: {
    border: 'none',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

export default GlobalStyle;
