/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Length = () => {
  return (
    <div className="content-item">
      <h2>Length()</h2>
      <div className="desc">
        <p>
          The length property returns or sets the number of elements in an
          array.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let city = ["California", "Barcelona", "Paris", "Kathmandu"];
// find the length of the city array
let len = city.length;
console.log(len);

// Output: 4`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Length;
