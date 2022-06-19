/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Includes = () => {
  return (
    <div className="content-item">
      <h2>Includes()</h2>
      <div className="desc">
        <p>
          The includes() method checks if an array contains a specified element
          or not.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");

console.log(check); 

// Output: true`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Includes;
