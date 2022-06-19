import { CopyBlock, vs2015 } from 'react-code-blocks';

const From = () => {
  return (
    <div className="content-item">
      <h2>from()</h2>
      <div className="desc">
        <p>
          The from() method creates a new array from any array-like or iterable
          object.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// creating a new array from string
let newArray = Array.from("abc");

console.log(newArray);

// Output:
// [ 'a', 'b', 'c' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`// creating an array from a string 
let array1= Array.from("JavaScript");

console.log(array1);
Output:
// [ 4, 6, 8 ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default From;
