/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const DefaultParameters = () => {
  return (
    <div className="content-item">
      <h2>Default Parameters</h2>
      <div className="desc">
        <p>
          In JavaScript, function parameters default to undefined. However, it's
          often useful to set a different default value. This is where default
          parameters can help.
        </p>
        <p>
          In the past, the general strategy for setting defaults was to test
          parameter values in the function body and assign a value if they are
          undefined.
        </p>
        <p>
          In the following example, if no value is provided for b when multiply
          is called, b's value would be undefined when evaluating a * b and
          multiply would return NaN.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function multiply(a, b) {
  return a * b
}

multiply(5, 2)  // 10
multiply(5)     // NaN !
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          To guard against this, something like the second line would be used,
          where b is set to 1 if multiply is called with only one argument:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1
  return a * b
}

multiply(5, 2)  // 10
multiply(5)     // 5
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          With default parameters in ES2015, checks in the function body are no
          longer necessary. Now, you can assign 1 as the default value for b in
          the function head:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function multiply(a, b = 1) {
  return a * b
}

multiply(5, 2)          // 10
multiply(5)             // 5
multiply(5, undefined)  // 5
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h2>Examples</h2>
        <h3>Passing undefined vs. other falsy values</h3>
        <p>
          In the second call in this example, even if the first argument is set
          explicitly to undefined (though not null or other falsy values), the
          value of the num argument is still the default.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function test(num = 1) {
  console.log(typeof num)
}

test()           // 'number' (num is set to 1)
test(undefined)  // 'number' (num is set to 1 too)

// test with other falsy values:
test('')         // 'string' (num is set to '')
test(null)       // 'object' (num is set to null)
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Evaluated at call time</h3>
        <p>
          The default argument is evaluated at call time. Unlike with Python
          (for example), a new object is created each time the function is
          called.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function append(value, array = []) {
  array.push(value)
  return array
}

append(1)  // [1]
append(2)  // [2], not [1, 2]
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>This even applies to functions and variables:</p>
        <div className="code-block">
          <CopyBlock
            text={`function callSomething(thing = something()) {
  return thing
}

let numberOfTimesCalled = 0
function something() {
  numberOfTimesCalled += 1
  return numberOfTimesCalled
}

callSomething()  // 1
callSomething()  // 2
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h2>Earlier parameters are available to later default parameters</h2>
        <p>
          Parameters defined earlier (to the left) are available to later
          default parameters:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function greet(name, greeting, message = greeting + ' ' + name) {
  return [name, greeting, message]
}

greet('David', 'Hi')                     // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!')  // ["David", "Hi", "Happy Birthday!"]
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          This functionality can be approximated like this, which demonstrates
          how many edge cases are handled:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function go() {
  return ':P'
}

function withDefaults(a, b = 5, c = b, d = go(), e = this,
                      f = arguments, g = this.value) {
  return [a, b, c, d, e, f, g]
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({value: '=^_^='});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({value: '=^_^='});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h2>Scope Effects</h2>
        <p>
          If default parameters are defined for one or more parameter, then a
          second scope (Environment Record) is created, specifically for the
          identifiers within the parameter list. This scope is a parent of the
          scope created for the function body.
        </p>
        <p>
          This means that functions and variables declared in the function body
          cannot be referred to from default value parameter initializers;
          attempting to do so throws a run-time ReferenceError.
        </p>
        <p>
          It also means that variables declared inside the function body using
          var will mask parameters of the same name, instead of the usual
          behavior of duplicate var declarations having no effect.
        </p>
        <p>
          The following function will throw a ReferenceError when invoked,
          because the default parameter value does not have access to the child
          scope of the function body:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function f(a = go()) { // Throws a 'ReferenceError' when 'f' is invoked.
  function go() { return ':P' }
}`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          This function will print the value of the parameter a, because the
          variable var a is hoisted only to the top of the scope created for the
          function body, not the parent scope created for the parameter list, so
          its value is not visible to b.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // Logs "undefined"
f(5); // Logs "5"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Parameters without defaults after default parameters</h3>
        <p>
          Parameters are still set left-to-right, overwriting default parameters
          even if there are later parameters without defaults.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function f(x = 1, y) {
  return [x, y]
}

f()   // [1, undefined]
f(2)  // [2, undefined]
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Destructured parameter with default value assignment</h3>
        <p>
          You can use default value assignment with the destructuring assignment
          notation.
        </p>
        <p>
          A common way of doing that is to assign an empty object/array to the
          destructured object/array; for example: [x = 1, y = 2] = [] . By doing
          it that way, you make it possible to pass an empty array/object to the
          function and still have those values prefilled:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray();       // 3
preFilledArray([]);     // 3
preFilledArray([2]);    // 4
preFilledArray([2, 3]); // 5

// Works the same for objects:
function preFilledObject({z = 3} = {}) {
  return z;
}

preFilledObject();          // 3
preFilledObject({});        // 3
preFilledObject({ z: 2 });  // 2
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

export default DefaultParameters;
