/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ObjectAssign = () => {
  return (
    <div className="content-item">
      <h2>Object Assign</h2>
      <div className="desc">
        <p>
          The Object.assign() method copies all enumerable own properties from
          one or more source objects to a target object. It returns the modified
          target object.
        </p>
        <h3>Example - 1</h3>
        <div className="code-block">
          <CopyBlock
            text={`const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Example - 2</h3>
        <div className="code-block">
          <CopyBlock
            text={`const obj1 = { a: 1 }
const obj2 = { b: 2 }
const obj3 = Object.assign({},
obj1, obj2)
console.log(obj3)
// { a: 1, b: 2 }`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ObjectAssign;
