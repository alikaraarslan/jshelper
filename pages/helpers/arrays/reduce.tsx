/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Reduce = () => {
  return (
    <div className="content-item">
      <h2>Reduce()</h2>
      <div className="desc">
        <p>
          The reduce() method executes a reducer function on each element of the
          array and returns a single output value.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const message = ["JavaScript ", "is ", "fun."];
// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

// Output: JavaScript is fun.`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>reduce() Parameters</h3>
        <div className="code-block">
          <CopyBlock
            text={`arr.reduce(callback(accumulator, currentValue), initialValue)`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>The reduce() method takes in:</p>
        <ul>
          <li>
            callback - The function to execute on each array element (except the
            first element if no initialValue is provided). It takes in
          </li>
          <li>accumulator - It accumulates the callback's return values.</li>
          <li>
            currentValue - The current element being passed from the array.
          </li>
          <li>
            initialValue (optional) - A value that will be passed to callback()
            on first call. If not provided, the first element acts as the
            accumulator on the first call and callback() won't execute on it.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reduce;
