/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';
const StringIncludes = () => {
  return (
    <div className="content-item">
      <h2>String Includes</h2>
      <div className="desc">
        <p>
          This method lets you determine whether or not a string includes
          another string.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`'Blue Whale'.includes('blue')  // returns false
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Examples</h3>
        <div className="code-block">
          <CopyBlock
            text={`const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true
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

export default StringIncludes;
