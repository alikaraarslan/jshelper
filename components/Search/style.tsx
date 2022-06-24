import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  input {
    border: none;
    box-shadow: none;
    height: 32px;
    padding: 0 10px;
    border-radius: 8px 0 0 8px;
    transition: 300ms;
    ::placeholder {
      opacity: 0.6;
      transition: 300ms;
    }
  }
  .search-button {
    height: 32px;
    width: 40px;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: 300ms;
    svg {
      width: 14px;
    }
  }
`;

export default SearchWrapper;
