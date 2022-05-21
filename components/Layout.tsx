import { useState } from 'react';
import styled from 'styled-components';
import StyledThemeProvider from '../styles/ThemeProvider';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutWrapper = styled.div`
  display: flex;
  width: calc(100% - 60px);
  margin: 30px;
  background: rgba(224, 224, 233, 0.3);
  border-radius: 12px;
  .page {
    flex: 1;
    flex-direction: column;
    padding: 30px;
  }
`;

export const lightTheme = {
  body: '#f9f9fa',
  text: '#050505',
};
export const darkTheme = {
  // body: '#050505',
  // text: '#f9f9fa',
  body: '#f9f9fa',
  text: '#050505',
};

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');
  return (
    <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <LayoutWrapper>
        <Sidebar theme={!isDarkTheme ? darkTheme : lightTheme} />
        <div className="page">
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          {children}
        </div>
      </LayoutWrapper>
    </StyledThemeProvider>
  );
};

export default Layout;
