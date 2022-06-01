import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ToLowerCase = () => {
  return (
    <div className="content-item">
      <h2>ToLowerCase()</h2>
      <p>toLowerCase() converts a string to lowercase letters:</p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello World!";
let result = text.toLowerCase();
console.log(result); // "hello world!"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ToLowerCase;
