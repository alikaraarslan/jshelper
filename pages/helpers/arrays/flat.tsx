/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Flat = () => {
  return (
    <div className="content-item">
      <h2>Flat()</h2>
      <div className="desc">
        <p>
          The flat() method creates a new array by flattening a nested array up
          to the specified depth.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// 3 nested arrays 
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2 
let flattenArray = numbers.flat(2);

// new flatten array
console.log(flattenArray);

// Output:
// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Flat;
