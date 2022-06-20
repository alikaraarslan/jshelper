/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Slice = () => {
  return (
    <div className="content-item">
      <h2>Slice()</h2>
      <div className="desc">
        <p>
          The slice() method returns a shallow copy of a portion of an array
          into a new array object.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let numbers = [2, 3, 5, 7, 11, 13, 17];
// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray);

// Output: [ 7, 11, 13 ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Slice;
