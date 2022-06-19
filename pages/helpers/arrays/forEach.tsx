/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ForEach = () => {
  return (
    <div className="content-item">
      <h2>ForEach()</h2>
      <div className="desc">
        <p>
          The forEach() method executes a provided function for each array
          element.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let numbers = [1, 3, 4, 9, 8];
// function to compute square of each number
function computeSquare(element) {
  console.log(element * element);
}

// compute square root of each element
numbers.forEach(computeSquare);

/* Output:
1
9 
16
81
64
*/`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`function printElements(element, index) {
    console.log('Array Element ' + index + ': ' + element);
}

const prices = [1800, 2000, 3000, , 5000, 500, 8000];

// forEach does not execute for elements without values
// in this case, it skips the third element as it is empty
prices.forEach(printElements);
Output:
// Array Element 0: 1800
// Array Element 1: 2000
// Array Element 2: 3000
// Array Element 4: 5000
// Array Element 5: 500
// Array Element 6: 8000`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ForEach;
