/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const DoWhileLoops = () => {
  return (
    <div className="content-item">
      <h2>Do...While Loops</h2>
      <div className="desc">
        <p>
          The do...while statement repeats until a specified condition evaluates
          to false.
        </p>
        <p>A do...while statement looks as follows:</p>
        <div className="code-block">
          <CopyBlock
            text={`do
  statement
while (condition);
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          statement is always executed once before the condition is checked.
        </p>
        <p>
          If condition is true, the statement executes again. At the end of
          every execution, the condition is checked. When the condition is
          false, execution stops, and control passes to the statement following
          do...while.
        </p>
        <h3>Example Usage</h3>
        <div className="code-block">
          <CopyBlock
            text={`let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default DoWhileLoops;
