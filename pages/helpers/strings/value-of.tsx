import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ValueOf = () => {
  return (
    <div className="content-item">
      <h2>ValueOf()</h2>
      <p>valueOf() returns the primitive value of a string:</p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello World!";
let result = text.valueOf();
console.log(result); // "Hello World!"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`const s = new String('test');
console.log(typeof s); // "object"
console.log(s.valueOf()); // "test"
console.log(typeof s.valueOf()); // "string"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ValueOf;
