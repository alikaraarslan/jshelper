import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

type Props = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

const Header = ({ toggleTheme, isDarkTheme }: Props) => {
  return (
    <HeaderWrapper>
      <div>Search Box</div>
      <div>
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞Set Light
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜Set Dark
            </span>
          )}
        </button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
