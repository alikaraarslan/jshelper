import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Substring = () => {
  return (
    <div className="content-item">
      <h2>Substring()</h2>
      <p>substring() extracts a part of a string:</p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello world!";
let result = text.substring(1, 4);
console.log(result); // "ell"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Substring;
