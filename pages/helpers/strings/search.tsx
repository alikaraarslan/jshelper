import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Search = () => {
  return (
    <div className="content-item">
      <h2>Search()</h2>
      <p>
        search() searches a string for a value and returns the position of the
        first match:
      </p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`var str = "Hello dev!";
var n = str.search("dev");
console.log(n); // Expected output: 6`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
