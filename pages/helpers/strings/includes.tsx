import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Includes = () => {
  return (
    <div className="content-item">
      <h2>Includes()</h2>
      <div className="desc">
        <p>includes() returns true if a string contains a specified string.</p>
        <div className="code-block">
          <CopyBlock
            text={`let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result); // true`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Includes;
