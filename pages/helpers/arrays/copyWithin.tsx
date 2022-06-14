/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Unshift = () => {
  return (
    <div className="content-item">
      <h2>CopyWithin()</h2>
      <div className="desc">
        <p>
          The copyWithin() method copies array elements from one position to
          another in the given array.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let words = ["apple", "ball", "cat", "dog"];

// copies element from index 0 to index 3 
words.copyWithin(3, 0);

// modifies the original array 
console.log(words);

// Output: 
// [ ''apple'', ''ball'', ''cat'', ''apple'' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`let numbers = [1, 2, 3, 4, 5];

// copying element located at 4th index to 0th index
numbers.copyWithin(0, 4);

// modifies the original array
console.log(numbers); // [ 5, 6, 3, 4, 5 ]

let letters = ["a", "b", "c", "d"];

// copying element located at 1st index to 2nd index
letters.copyWithin(2, 1);

// modifies the original array 
console.log(letters); // [ 'a', 'b', 'b', 'c' ]
output:
[ 5, 2, 3, 4, 5 ]
[ 'a', 'b', 'b', 'c' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Unshift;
