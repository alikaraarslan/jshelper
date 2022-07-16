/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Math = () => {
  return (
    <div className="content-item">
      <h2>Math</h2>
      <div className="desc">
        <p>Using a spread operator (...) we can do it in a single line.</p>
        <div className="code-block">
          <CopyBlock
            text={`const arr = [2,8,15,4];
Math.min(...arr);
// Output: 2
Math.max(...arr);
// Output: 15`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Math;
