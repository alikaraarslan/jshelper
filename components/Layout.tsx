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

const Layout: React.FC = ({ children }) => {
  return (
    <StyledThemeProvider>
      <LayoutWrapper>
        <Sidebar />
        <div className="page">
          <Header />
          {children}
        </div>
      </LayoutWrapper>
    </StyledThemeProvider>
  );
};

export default Layout;
