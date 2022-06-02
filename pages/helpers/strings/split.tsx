import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Split = () => {
  return (
    <div className="content-item">
      <h2>Split()</h2>
      <div className="desc">
        <p>
          split() splits a string into an array of substrings, and returns the
          array:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray); // ["How", "are", "you", "doing", "today?"]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Split;
