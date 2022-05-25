/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const DestructuringObject = () => {
  return (
    <div className="content-item">
      <h2>Destructuring Object</h2>
      <div className="desc">
        <p>
          The object destructuring is a useful JavaScript feature to extract
          properties from objects and bind them to variables.
        </p>
        <p>
          What's better, object destructuring can extract multiple properties in
          one statement, can access properties from nested objects, and can set
          a default value if the property doesn't exist.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let obj = {
a: 55,
b: 44
};
let { a, b } = obj;
console.log(a); // 55
console.log(b); // 44
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

export default DestructuringObject;
