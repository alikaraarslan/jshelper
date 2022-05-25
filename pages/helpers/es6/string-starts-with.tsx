/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const StringStartsWith = () => {
  return (
    <div className="content-item">
      <h2>String Starts With</h2>
      <div className="desc">
        <p>
          This method lets you determine whether or not a string begins with
          another string. This method is case-sensitive.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`//startswith
let str = 'To be, or not to be, that is the question.'

console.log(str.startsWith('To be'))          // true
console.log(str.startsWith('not to be'))      // false
console.log(str.startsWith('not to be', 10))  // true
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

export default StringStartsWith;
