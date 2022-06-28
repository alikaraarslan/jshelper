/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Number = () => {
  return (
    <div className="content-item">
      <h2>Number()</h2>
      <div className="desc">
        <p>
          Number represents integer and floating numbers (decimals and
          exponentials). For example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`const number1 = 3/0;
console.log(number1); // Infinity

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Number;
