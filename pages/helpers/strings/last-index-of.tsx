import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const LastIndexOf = () => {
  return (
    <div className="content-item">
      <h2>LastIndexOf()</h2>
      <p>
        lastIndexOf() returns the index of the last occurrence of a specified
        value in a string.
      </p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet");
console.log('result: ', result);
// Expected output:36`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default LastIndexOf;
