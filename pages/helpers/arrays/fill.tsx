import { CopyBlock, vs2015 } from 'react-code-blocks';

const Fill = () => {
  return (
    <div className="content-item">
      <h2>Fill()</h2>
      <div className="desc">
        <p>
          The fill() method returns an array by filling all elements with a
          specified value.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// defining an array 
var fruits = ['Apple', 'Banana', 'Grape'];
// filling every element of the array with 'Cherry'
fruits.fill("Cherry");
console.log(fruits);
// Output: 
// [ 'Cherry', 'Cherry', 'Cherry' ]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Fill;
