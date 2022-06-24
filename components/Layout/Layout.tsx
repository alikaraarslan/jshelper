import { useState } from 'react';
import StyledThemeProvider from '../../styles/ThemeProvider';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import LayoutWrapper from './style';

export const lightTheme = {
  bg: '#e9e9e9',
  bgDark: '#dfdfdf',
  text: 'black',
};
export const darkTheme = {
  bg: '#1e232a',
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
          <div className="content">
            {children}
            <Footer />
          </div>
        </div>
      </LayoutWrapper>
    </StyledThemeProvider>
  );
};

export default Layout;
