import styled from 'styled-components';
import Theme from './Theme';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
      <div>Search Box</div>
      <Theme toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </HeaderWrapper>
  );
};

export default Header;
