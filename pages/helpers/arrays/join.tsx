/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Join = () => {
  return (
    <div className="content-item">
      <h2>Join()</h2>
      <div className="desc">
        <p>
          The join() method returns a new string by concatenating all of the
          elements in an array, separated by a specified separator.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let message = ["JavaScript", "is", "fun."];
// join all elements of array using space
let joinedMessage = message.join(" ");
console.log(joinedMessage);

// Output: JavaScript is fun.`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
