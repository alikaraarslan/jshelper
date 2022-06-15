/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Values = () => {
  return (
    <div className="content-item">
      <h2>Values()</h2>
      <div className="desc">
        <p>
        The values() method returns a new Array Iterator object that contains the values for each index in the array.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let languages = ["JavaScript", "Java", "C++"];
// returns an Array Iterator object that contain values
let iteratorObject = languages.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}

// Output:
// JavaScript
// Java
// C++`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Values;
