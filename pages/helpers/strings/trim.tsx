import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Trim = () => {
  return (
    <div className="content-item">
      <h2>Trim()</h2>
      <p>trim() removes whitespace from both sides of a string:</p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "     Hello World!     ";
let result = text.trim();
console.log(result); // "Hello World!"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Trim;
