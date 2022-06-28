/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const String = () => {
  return (
    <div className="content-item">
      <h2>String()</h2>
      <div className="desc">
        <p>JavaScript strings are for storing and manipulating text.</p>
        <div className="code-block">
          <CopyBlock
            text={`let text = "John Doe";
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default String;
