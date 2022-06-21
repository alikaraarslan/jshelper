/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Some = () => {
  return (
    <div className="content-item">
      <h2>Some()</h2>
      <div className="desc">
        <p>
          The some() method tests whether any of the array elements pass the
          given test function.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// a test function: returns an even number
function isEven(element) {
  return element % 2 === 0;
}

// defining an array
let numbers = [1, 3, 2, 5, 4];

// checks whether the numbers array contain at least one even number
console.log(numbers.some(isEven));

// Output: true `}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`// array of scores obtained by student 
let scoreObtained = [45, 50, 39, 78, 65, 20];

// a test function: returns score less than 40
function studentIsPassed(score) {
  return score < 40;
}

// checks if score of at least one student is less than 40  
if(scoreObtained.some(studentIsPassed) == true) {
  console.log("At least one of the students failed.");
}

else
  console.log("All students are passed.");`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Some;
