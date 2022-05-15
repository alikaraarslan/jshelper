import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div>Search Box</div>
      <div>Light / Dark Mode</div>
    </HeaderWrapper>
  );
};

export default Header;
