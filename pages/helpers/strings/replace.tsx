import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Replace = () => {
  return (
    <div className="content-item">
      <h2>Replace()</h2>
      <p>
        replace() searches a string for a value, and returns a new string with
        the specified value(s) replaced:
      </p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`const str = "hello dev!";
const newStr = str.replace("dev", "world");
console.log(newStr); // Expected output: hello world!`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Replace;
