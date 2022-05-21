import { ThemeProvider as Provider } from 'styled-components';

import GlobalStyle from './GlobalStyles';

const StyledThemeProvider = ({ theme, children }: any) => {
  return (
    <Provider theme={theme}>
      <>
        <GlobalStyle theme={theme} />
        {children}
      </>
    </Provider>
  );
};

export default StyledThemeProvider;
