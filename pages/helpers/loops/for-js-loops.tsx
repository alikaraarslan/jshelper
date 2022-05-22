/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ForLoops = () => {
  return (
    <div className="content-item">
      <h2>For Loops</h2>
      <div className="desc">
        <p>Loops offer a quick and easy way to do something repeatedly.</p>
        <p>
          A for loop repeats until a specified condition evaluates to false. The
          JavaScript for loop is similar to the Java and C for loop.
        </p>
        <p>A for statement looks as follows:</p>
        <div className="code-block">
          <CopyBlock
            text={`for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>When a for loop executes, the following occurs:</p>
        <ul>
          <li>
            The initializing expression initialExpression, if any, is executed.
            This expression usually initializes one or more loop counters, but
            the syntax allows an expression of any degree of complexity. This
            expression can also declare variables.
          </li>
          <li>
            The conditionExpression expression is evaluated. If the value of
            conditionExpression is true, the loop statements execute. Otherwise,
            the for loop terminates. (If the conditionExpression expression is
            omitted entirely, the condition is assumed to be true.)
          </li>
          <li>
            If present, the update expression incrementExpression is executed.
          </li>
          <li>Control returns to Step 2.</li>
        </ul>
        <h3>Example Usage</h3>
        <div className="code-block">
          <CopyBlock
            text={`const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = '';
for (let i = 0; i < cars.length; i++) {
  console.log('text',text);
}`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Example - 1</h3>
        <div className="content-iframe">
          <iframe
            src="https://codesandbox.io/embed/jshelper-for-loops-nmjs3o?fontsize=14&hidenavigation=1&theme=dark"
            title="jshelper-for-loops"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ForLoops;
