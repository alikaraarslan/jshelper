/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ToLocaleString = () => {
  return (
    <div className="content-item">
      <h2>ToLocaleString()</h2>
      <div className="desc">
        <p>
          The toLocaleString() method returns a string representing the elements
          of the array in a particular locale.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let array1 = ["Nepal", 1];
// returns string representation of array
let stringFromArray = array1.toLocaleString();

console.log(stringFromArray);

// Output:
// Nepal,1`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`let o = [1, "JavaScript", new Date()];
// returns string representation of array
let stringFromArray = 0.toLocaleString();

console.log(stringFromArray);
// Output:
// 1,JavaScript,5/9/2022, 2:11:22 PM`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`// defining an array 
let prices = [689, 100, 4577, 56];

// passing locales and options: 
// using United States Dollar currency string format
let resultingString = prices.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(resultingString);
// Output:
// $689.00,$100.00,$4,577.00,$56.00`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ToLocaleString;
