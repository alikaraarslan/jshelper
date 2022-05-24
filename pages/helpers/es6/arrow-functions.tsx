/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ArrowFunctions = () => {
  return (
    <div className="content-item">
      <h2>Arrow Function</h2>
      <div className="desc">
        <p>
          An arrow function expression is a compact alternative to a traditional
          function expression, but is limited and can't be used in all
          situations.
        </p>
        <p>
          There are differences between arrow functions and traditional
          functions, as well as some limitations:
        </p>
        <ul>
          <li>
            Arrow functions don't have their own bindings to this, arguments or
            super, and should not be used as methods.
          </li>
          <li>Arrow functions don't have access to the new.target keyword.</li>
          <li>
            Arrow functions aren't suitable for call, apply and bind methods,
            which generally rely on establishing a scope.
          </li>
          <li>Arrow functions cannot be used as constructors.</li>
          <li>Arrow functions cannot use yield, within its body.</li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h2>Syntax</h2>
        <h3>Basic syntax</h3>
        <p>One param. With simple expression return is not needed:</p>
        <div className="code-block">
          <CopyBlock
            text={`param => expression
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          Multiple params require parentheses. With simple expression return is
          not needed:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`(param1, paramN) => expression
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>Multiline statements require body braces and return:</p>
        <div className="code-block">
          <CopyBlock
            text={`param => {
  let a = 1;
  return a + param;
}
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          Multiple params require parentheses. Multiline statements require body
          braces and return:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Advanced syntax</h3>
        <p>
          To return an object literal expression requires parentheses around
          expression:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`params => ({foo: "a"}) // returning the object {foo: "a"}
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>Rest parameters are supported:</p>
        <div className="code-block">
          <CopyBlock
            text={`(a, b, ...r) => expression
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>Default parameters are supported:</p>
        <div className="code-block">
          <CopyBlock
            text={`(a=400, b=20, c) => expression
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>Destructuring within params supported:</p>
        <div className="code-block">
          <CopyBlock
            text={`([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
      <h3>Examples</h3>
      <div className="code-block">
        <CopyBlock
          text={`// An empty arrow function returns undefined
let empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter(v => v % 2 == 0);
// [6, 0, 18]

var double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise.then(a => {
  // ...
}).then(b => {
  // ...
});

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);
`}
          language={'javascript'}
          showLineNumbers={false}
          theme={vs2015}
        />
      </div>
    </div>
  );
};

export default ArrowFunctions;
