import Search from '../Search/Search';
import Theme from '../Theme/Theme';
import HeaderWrapper from './style';

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
