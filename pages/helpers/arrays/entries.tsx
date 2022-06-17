import { CopyBlock, vs2015 } from 'react-code-blocks';

const Entries = () => {
  return (
    <div className="content-item">
      <h2>Entries()</h2>
      <div className="desc">
        <p>
          The entries() method returns a new Array Iterator object containing
          key/value pairs for each array index.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// defining an array named alphabets
const alphabets = ["A", "B", "C"];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator = alphabets.entries();

// iterating through key-value pairs in the array
for (let entry of iterator) {
  console.log(entry);
}

// Output: 
// [ 0, 'A' ]
// [ 1, 'B' ]
// [ 2, 'C' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Entries;
