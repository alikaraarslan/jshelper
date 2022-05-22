import styled from 'styled-components';
import Search from './Search';
import Theme from './Theme';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  padding: 20px;
  margin: 20px auto;
  border-radius: 12px;
`;

type Props = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

const Header = ({ toggleTheme, isDarkTheme }: Props) => {
  return (
    <HeaderWrapper className="header">
      <Search />
      <Theme toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </HeaderWrapper>
  );
};

export default Header;
