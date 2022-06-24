import Link from 'next/link';
import Theme from '../Theme/Theme';
import HeaderWrapper from './style';

type Props = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

const Header = ({ toggleTheme, isDarkTheme }: Props) => {
  return (
    <HeaderWrapper className="header">
      <div className="title">
        <Link href="/">
          <a>Js Helper</a>
        </Link>
      </div>
      <Theme toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </HeaderWrapper>
  );
};

export default Header;
