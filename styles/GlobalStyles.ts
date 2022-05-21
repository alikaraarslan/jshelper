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
  button: {
    border: 'none',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

export default GlobalStyle;
