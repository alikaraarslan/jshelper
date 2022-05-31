import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Substr = () => {
  return (
    <div className="content-item">
      <h2>Substr()</h2>
      <p>substr() extracts a part of a string:</p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello world!";
let result = text.substr(1, 4);
console.log(result); // "ello"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Substr;
