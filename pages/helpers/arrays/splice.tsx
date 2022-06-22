/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Splice = () => {
  return (
    <div className="content-item">
      <h2>Splice()</h2>
      <div className="desc">
        <p>
          The splice() method returns an array by changing (adding/removing) its
          elements in place.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let prime_numbers = [2, 3, 5, 7, 9, 11];
// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`let languages = ["JavaScript", "Python", "Java", "Lua"];
// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// removing 3 elements
let removed2 = languages.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]
Output:
[ 'Java', 'Lua' ]
[ 'JavaScript', 'Python', 'C', 'C++' ]
[]
[ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]
[ 'Lua', 'Python', 'C' ]
[ 'JavaScript', 'Java', 'C++' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Splice;
