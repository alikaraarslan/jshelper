/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Boolean = () => {
  return (
    <div className="content-item">
      <h2>Boolean()</h2>
      <div className="desc">
        <p>
          In JavaScript, booleans are the primitive data types that can either
          be true or false. For example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const a = true;
const b = false;
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log(undefined) // false
console.log(null) // false
console.log(NaN) // false
console.log('') // false
console.log(0) // false
console.log(20) // true 
console.log(-20) // true
console.log('hello') // true
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Boolean;
