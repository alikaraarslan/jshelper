/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Undefined = () => {
  return (
    <div className="content-item">
      <h2>Undefined()</h2>
      <div className="desc">
        <p>
          If a variable is declared but the value is not assigned, then the
          value of that variable will be undefined. For example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let name;
console.log(name); // undefined
// Output: undefined`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          It is also possible to explicitly assign undefined to a variable. For
          example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let name = "Felix";
// assigning undefined to the name variable
name = undefined

console.log(name);
// Output: undefined`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`let a;
console.log(typeof a); // undefined`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Undefined;
