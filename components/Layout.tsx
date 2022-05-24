import { useState } from 'react';
import styled from 'styled-components';
import StyledThemeProvider from '../styles/ThemeProvider';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutWrapper = styled.div`
  display: flex;
  .page {
    flex: 1;
    flex-direction: column;
    transition: 300ms;
    height: 100vh;
    overflow: hidden;
    .content {
      padding: 0 20px 20px;
      height: calc(100vh - 120px);
      overflow-y: auto;
      width: calc(100% - 20px);
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background: #3e3e3e;
      }
      ::-webkit-scrollbar-thumb {
        background: #888;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      .rc-collapse-header {
        .custom-arrow {
          tranform: rotate(90deg);
        }
      }
      .content-item {
        h2 {
          font-size: 24px;
          font-weight: 500;
        }
        .desc {
          margin-top: 20px;
          p {
            margin: 5px 0;
            font-size: 16px;
          }
          .code-block {
            margin: 20px 0;
            > div {
              display: flex;
            }
          }
          ul {
            margin: 10px 0;
            list-style: lower-roman;
            padding-left: 20px;
            font-size: 16px;
            li {
              margin-bottom: 5px;
            }
          }
          h3 {
            margin: 20px 0;
          }
          .content-iframe {
            iframe {
              width: 100%;
              height: 500px;
              border: none;
            }
          }
          pre {
            margin: 20px 0;
            background: #222831;
            padding: 10px;
            border-radius: 8px;
          }
        }
      }
    }
  }
`;

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
