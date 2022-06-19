/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Push = () => {
  return (
    <div className="content-item">
      <h2>Push()</h2>
      <div className="desc">
        <p>
          The push() method adds zero or more elements to the end of the array.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let city = ["New York", "Madrid", "Kathmandu"];
// add "London" to the array
city.push("London");

console.log(city);

// Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Push;
