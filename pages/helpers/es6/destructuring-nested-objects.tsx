/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const DestructuringNestedObjects = () => {
  return (
    <div className="content-item">
      <h2>Destructuring Nested Objects</h2>
      <div className="desc">
        <p>
          Modern JavaScript allows us to define variables quickly from existing
          collections, objects, and arrays, or values. This shorthand is called
          destructuring assignment, or destructuring for short. If a collection
          contains other collections as elements, those collections can also be
          destructured.
        </p>
        <h3>Simple Object Destructuring</h3>
        <p>
          Here we have a simple object obj from which we are pulling out values
          from obj keys b and d and assigning to new const variables of the same
          name, b and d. The other keys a, c, and e are not destructured and so
          are not assigned to variables of the same name.
        </p>
        <h3>Example - 1</h3>
        <div className="code-block">
          <CopyBlock
            text={`const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};
const {
  b,
  d
} = obj;
console.log(b); // 2
console.log(d); // 4
console.log(a); // ReferenceError: a is not defined`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Example - 2</h3>
        <div className="code-block">
          <CopyBlock
            text={`const Person = {
name: "Harry Potter",
age: 29,
sex: "male",
materialStatus: "single",
address: {
country: "USA",
state: "Nevada",
city: "Carson City",
pinCode: "500014",
},
};
const { address : { state, pinCode }, name } = Person;
console.log(name, state, pinCode)
// Harry Potter Nevada 500014
console.log(city) // ReferenceError`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default DestructuringNestedObjects;
