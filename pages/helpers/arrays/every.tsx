import { CopyBlock, vs2015 } from 'react-code-blocks';

const Entries = () => {
  return (
    <div className="content-item">
      <h2>Every()</h2>
      <div className="desc">
        <p>The syntax of the every() method is:</p>
        <div className="code-block">
          <CopyBlock
            text={`arr.every(callback(currentValue), thisArg)`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`function checkAdult(age) {
    return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult); // false

if (!check) {
    console.log("All members must be at least 18 years of age.")
}

// using arrow function
let check1 = ageArray.every(age => age >= 18); // false
console.log(check1);
// Output:All members must be at least 18 years of age.
// false`}
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
