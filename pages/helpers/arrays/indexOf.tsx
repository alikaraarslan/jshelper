/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const IndexOf = () => {
  return (
    <div className="content-item">
      <h2>IndexOf()</h2>
      <div className="desc">
        <p>
          The indexOf() method returns the first index of occurance of an array
          element, or -1 if it is not found.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let languages = ["Java", "JavaScript", "Python", "JavaScript"];
// get the index of the first occurrence of "JavaScript"
let index = languages.indexOf("JavaScript");
console.log(index);

// Output: 1`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`var priceList = [10, 8, 2, 31, 10, 1, 65];
// indexOf() returns the first occurance
var index1 = priceList.indexOf(31);
console.log(index1); // 3

var index2 = priceList.indexOf(10);
console.log(index2); // 0

// second argument specifies the search's start index
var index3 = priceList.indexOf(10, 1);
console.log(index3); // 4

// indexOf returns -1 if not found
var index4 = priceList.indexOf(69.5);
console.log(index4); // -1
Output:
// 3
// 0
// 4
// -1`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexOf;
