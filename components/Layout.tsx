import { useState } from 'react';
import styled from 'styled-components';
import StyledThemeProvider from '../styles/ThemeProvider';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutWrapper = styled.div`
  display: flex;
  .page {
    flex: 1;
    flex-direction: column;
    transition: 300ms;
    .content {
      padding: 0 20px 55px;
      height: calc(100% - 110px);
    }
  }
`;

export const lightTheme = {
  bg: '#e9e9e9',
  bgDark: '#d5d5d5',
  text: 'black',
};
export const darkTheme = {
  bg: '#373c44',
  bgDark: '#222831',
  text: '#f9f9fa',
};

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>('dark');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');
  const resTheme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <StyledThemeProvider theme={resTheme}>
      <LayoutWrapper theme={resTheme}>
        <Sidebar theme={!resTheme} />
        <div className="page">
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <div className="content">{children}</div>
        </div>
      </LayoutWrapper>
    </StyledThemeProvider>
  );
};

export default Layout;
