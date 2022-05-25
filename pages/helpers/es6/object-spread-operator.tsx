/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ObjectSpreadOperator = () => {
  return (
    <div className="content-item">
      <h2>Object Spread Operator</h2>
      <div className="desc">
        <p>
          The Rest/Spread Properties for ECMAScript proposal (ES2018) added
          spread properties to object literals. It copies own enumerable
          properties from a provided object onto a new object.
        </p>
        <p>
          Shallow-cloning (excluding prototype) or merging of objects is now
          possible using a shorter syntax than Object.assign().
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ObjectSpreadOperator;
