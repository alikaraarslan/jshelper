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
    transition: 'background 0.2s ease-in, color 0.2s ease-in',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,Ubuntu, Cantarell, "Helvetica Neue", sans-serif;',
    height: '100%',
    overflow: 'hidden',
  },
  '.sidebar': {
    background: theme.bgDark,
    transition: '200ms ease-in',
    color: theme.text,
    '.rc-collapse > .rc-collapse-item > .rc-collapse-header': {
      transition: '200ms ease-in',
      color: theme.text,
    },
    '.rc-collapse-content': {
      transition: '200ms ease-in',
      color: theme.text,
    },
    '.rc-collapse-item.rc-collapse-item-active': {
      transition: '200ms ease-in',
      background: theme.bg,
    },
  },
  '.page': {
    transition: '200ms ease-in',
    background: theme.bg,
    color: theme.text,
  },
  '.button-link': {
    transition: '200ms ease-in',
    color: theme.text,
    background: theme.bgDark,
    '&:hover': {
      background: darken(0.1, theme.bgDark),
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
