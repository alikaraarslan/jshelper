/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Sort = () => {
  return (
    <div className="content-item">
      <h2>Sort()</h2>
      <div className="desc">
        <p>
          The sort() method sorts the items of an array in a specific order
          (ascending or descending).
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let city = ["California", "Barcelona", "Paris", "Kathmandu"];
// sort the city array in ascending order
let sortedArray = city.sort();
console.log(sortedArray);

// Output: [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`// sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// returns the sorted array
console.log(names.sort());

// modifies the array in place
console.log(names);

var priceList = [1000, 50, 2, 7, 14];
priceList.sort();

// Number is converted to string and sorted
console.log(priceList)
Output: 
[ 'Adam', 'Ben', 'Danil', 'Fabiano', 'Jeffrey' ]
[ 'Adam', 'Ben', 'Danil', 'Fabiano', 'Jeffrey' ]
[ 1000, 14, 2, 50, 7 ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Sort;
