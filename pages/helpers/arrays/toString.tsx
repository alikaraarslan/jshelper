/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ToString = () => {
  return (
    <div className="content-item">
      <h2>ToString()</h2>
      <div className="desc">
        <p>
          The toString() method returns a string formed by the elements of the
          given array.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// defining an array
let items = ["JavaScript", 1, "a", 3];

// returns a string with elements of the array separated by commas
let itemsString = items.toString();

console.log(itemsString);

// Output: 
// JavaScript,1,a,3`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ToString;
