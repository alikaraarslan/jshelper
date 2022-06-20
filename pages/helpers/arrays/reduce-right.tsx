/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ReduceRight = () => {
  return (
    <div className="content-item">
      <h2>ReduceRight()</h2>
      <div className="desc">
        <p>
          The reduceRight() method reduces the array to a single value by
          executing a callback function on two values of the array (from right
          to left).
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let numbers = [1, 2, 3, 4];
// function that adds last two values of the numbers array
function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

// returns a single value after reducing the numbers array
let sum = numbers.reduceRight(sum_reducer);

console.log(sum);

// Output: 10`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ReduceRight;
