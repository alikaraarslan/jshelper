import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ToString = () => {
  return (
    <div className="content-item">
      <h2>ToString()</h2>
      <div className="desc">
        <p>toString() returns the content of a string:</p>
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello World!";
let result = text.toString();
console.log(result); // "Hello World!"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`let num = 5;
let result = num.toString();
console.log(result); // "5"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ToString;
