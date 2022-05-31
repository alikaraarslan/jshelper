import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ToUpperCase = () => {
  return (
    <div className="content-item">
      <h2>ToUpperCase()</h2>
      <p>toUpperCase() converts a string to uppercase letters:</p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello World!";
let result = text.toUpperCase();
console.log(result); // "HELLO WORLD!"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ToUpperCase;
