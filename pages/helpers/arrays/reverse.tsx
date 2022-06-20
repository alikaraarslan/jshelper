/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Reverse = () => {
  return (
    <div className="content-item">
      <h2>Reverse()</h2>
      <div className="desc">
        <p>The reverse() method returns the array in reverse order.</p>
        <div className="code-block">
          <CopyBlock
            text={`let numbers = [1, 2, 3, 4, 5];
// reversing the numbers array
let reversedArray = numbers.reverse();

console.log(reversedArray);

// Output: [ 5, 4, 3, 2, 1 ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
// using spread operator to reverse the array
let reversedArray = [...languages].reverse();

console.log("Reversed Array:", reversedArray);

// modifies the original array
console.log("Original Array:", languages);

Output:
// Reversed Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
// Original Array: [ 'JavaScript', 'Python', 'C++', 'Java', 'Lua' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Reverse;
