import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const IndexOf = () => {
  return (
    <div className="content-item">
      <h2>IndexOf()</h2>
      <p>
        indexOf() returns the position of the first occurrence of a value in a
        string.
      </p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);
// expected output: 13`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexOf;
