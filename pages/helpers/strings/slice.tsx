import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Slice = () => {
  return (
    <div className="content-item">
      <h2>Slice()</h2>
      <p>slice() extracts a part of a string and returns the extracted part:</p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello world!";
let result = text.slice(0, 5);
console.log(result); // Expected output: Hello`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Slice;
