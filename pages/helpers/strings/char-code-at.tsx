import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const CharCodeAt = () => {
  return (
    <div className="content-item">
      <h2>CharCodeAt()</h2>
      <div className="desc">
        <p>includes() returns true if a string contains a specified string.</p>
        <div className="code-block">
          <CopyBlock
            text={`let text = "HELLO WORLD";
let code = text.charCodeAt(0);
console.log(code); // 72`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default CharCodeAt;
