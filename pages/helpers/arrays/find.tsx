/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Find = () => {
  return (
    <div className="content-item">
      <h2>Find()</h2>
      <div className="desc">
        <p>
          The find() method returns the value of the first array element that
          satisfies the provided test function.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let numbers = [1, 3, 4, 9, 8];
// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

// Output: 4`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

function isAdult(member) {
  return member.age >= 18;
}

console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }

// using arrow function and deconstructing
let adultMember = team.find(({ age }) => age >= 18);

console.log(adultMember); // { name: 'Alan', age: 20 }`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Find;
