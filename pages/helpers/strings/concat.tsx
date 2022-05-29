import { CopyBlock, vs2015 } from 'react-code-blocks';

const Concat = () => {
  return (
    <div className="content-item">
      <h2>Concat()</h2>
      <p>The concat() method concatenates (joins) two or more arrays:</p>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = arr1.concat(arr2);
console.log(arr3);
// expected output: Array ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Concat;
