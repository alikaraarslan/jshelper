import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Match = () => {
  return (
    <div className="content-item">
      <h2>Match()</h2>
      <div className="desc">
        <p>match() searches for a match in a string.</p>
        <div className="code-block">
          <CopyBlock
            text={`const str = "lopersum lopersum lopersum lopersum.;
console.log(str.match(/sum/g)); // ["sum", "sum", "sum", "sum"]))`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Match;
