/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const FlatMap = () => {
  return (
    <div className="content-item">
      <h2>flatMap()</h2>
      <div className="desc">
        <p>
          The flatMap() method first maps each element of an array using a
          mapping function, then flattens it into a new array.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// defining an array
let numbers = [1, 2, 3, 4, 5];

// each element of the array is squared and later flattened
const resultingArray = numbers.flatMap((x) => [x ** 2]);

console.log(resultingArray);

// Output:
// [ 1, 4, 9, 16, 25 ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`// defining an array
let numbers = [1, 2, 3, 4, 5];

// each element of the array is incremented by 1
// and later the array is flattened
let resultingArray = numbers.flatMap((element) => element + 1);

console.log(resultingArray);
Output:
[ 2, 3, 4, 5, 6 ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default FlatMap;
