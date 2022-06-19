/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Of = () => {
  return (
    <div className="content-item">
      <h2>Of()</h2>
      <div className="desc">
        <p>
          The of() method creates a new Array instance from the given arguments.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// creating an array named alphabets with elements A,B,C
let alphabets = Array.of("A", "B", "C");

// display contents of alphabet'
console.log(alphabets):

// Output: [ 'A', 'B', 'C' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Of;
