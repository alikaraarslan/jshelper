/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const DesctructuringArray = () => {
  return (
    <div className="content-item">
      <h2>Desctructuring Array</h2>
      <div className="desc">
        <p>
          The destructuring assignment syntax is a JavaScript expression that
          makes it possible to unpack values from arrays, or properties from
          objects, into distinct variables.
        </p>
        <h3>Example - 1</h3>
        <div className="code-block">
          <CopyBlock
            text={`let obj = {
a: 55,
b: 44
};
let { a, b } = obj;
console.log(a); // 55
console.log(b); // 44`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Example - 2</h3>
        <div className="code-block">
          <CopyBlock
            text={`let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Example - 3</h3>
        <div className="code-block">
          <CopyBlock
            text={`let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default DesctructuringArray;
