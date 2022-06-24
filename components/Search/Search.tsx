import Icon from '../Common/Icon';
import SearchWrapper from './style';

const Search = () => {
  return (
    <SearchWrapper className="search">
      <input type="text" placeholder="Search" />
      <button type="button" className="search-button">
        <Icon name="search" />
      </button>
    </SearchWrapper>
  );
};

export default Search;
