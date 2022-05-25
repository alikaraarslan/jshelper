/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ObjectPropertyAssignment = () => {
  return (
    <div className="content-item">
      <h2>Object Property Assignment</h2>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`const a = 2
const b = 5
const obj = { a, b }
// Before es6:
// obj = { a: a, b: b }
console.log(obj)
// prints { a: 2, b: 5 }
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

export default ObjectPropertyAssignment;
