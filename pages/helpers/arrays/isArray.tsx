/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const IsArray = () => {
  return (
    <div className="content-item">
      <h2>IsArray()</h2>
      <div className="desc">
        <p>
          The isArray() method checks whether the passed argument is an array or
          not.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let numbers = [1, 2, 3, 4];
// checking whether numbers is an array or not
console.log(Array.isArray(numbers));

let text = "JavaScript";

// checking whether text is an array or not
console.log(Array.isArray(text));

// Output:
// true
// false`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default IsArray;
