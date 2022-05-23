import { CopyBlock, vs2015 } from 'react-code-blocks';

const WhileLoops = () => {
  return (
    <div className="content-item">
      <h2>While Loops</h2>
      <div className="desc">
        <p>
          A while statement executes its statements as long as a specified
          condition evaluates to true. A while statement looks as follows:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`while (condition)
  statement
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          If the condition becomes false, statement within the loop stops
          executing and control passes to the statement following the loop.
        </p>
        <p>
          The condition test occurs before statement in the loop is executed. If
          the condition returns true, statement is executed and the condition is
          tested again. If the condition returns false, execution stops, and
          control is passed to the statement following while.
        </p>
        <h3>Example - 1</h3>
        <div className="code-block">
          <CopyBlock
            text={`let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          With each iteration, the loop increments n and adds that value to x.
          Therefore, x and n take on the following values:
        </p>
        <ul>
          <li>After the first pass: n = 1 and x = 1</li>
          <li>After the second pass: n = 2 and x = 3</li>
          <li>After the third pass: n = 3 and x = 6</li>
        </ul>
        <p>
          After completing the third pass, the condition n {'<'} 3 is no longer
          true, so the loop terminates.
        </p>
        <h3>Example - 2</h3>
        <p>
          Avoid infinite loops. Make sure the condition in a loop eventually
          becomes false—otherwise, the loop will never terminate! The statements
          in the following while loop execute forever because the condition
          never becomes false:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// Infinite loops are bad!
while (true) {
  console.log('Hello, world!');
}`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default WhileLoops;
