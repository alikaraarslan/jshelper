/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Symbol = () => {
  return (
    <div className="content-item">
      <h2>Symbol()</h2>
      <div className="desc">
        <p>
          The JavaScript ES6 introduced a new primitive data type called Symbol.
          Symbols are immutable (cannot be changed) and are unique. For example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// two symbols with the same description
const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          Though value1 and value2 both contain the same description, they are
          different.
        </p>
        <h2>Creating Symbol</h2>
        <p> You use the Symbol() function to create a Symbol. For example,</p>
        <div className="code-block">
          <CopyBlock
            text={`// creating symbol
const x = Symbol()

typeof x; // symbol

const x = Symbol('hey');
console.log(x); // Symbol(hey)`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h2>Access Symbol Description</h2>
        <p>
          To access the description of a symbol, we use the . operator. For
          example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const x = Symbol('hey');
console.log(x.description); // hey`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h2>Symbols are not included in for...in Loop</h2>
        <p>
          The for...in loop does not iterate over Symbolic properties. For
          example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let id = Symbol("id");
let person = {
    name: "Jack",
    age: 25,
    [id]: 12
};

// using for...in
for (let key in person) {
    console.log(key);
}
Output:
name
age`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Symbol;
