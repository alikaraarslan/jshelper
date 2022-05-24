import { CopyBlock, vs2015 } from 'react-code-blocks';

const SpreadOperator = () => {
  return (
    <div className="content-item">
      <h2>Spread Operator</h2>
      <div className="desc">
        <p>
          Spread syntax can be used when all elements from an object or array
          need to be included in a list of some kind.
        </p>
        <p>
          When we invoke the function, we pass it all the values in the array
          using the spread syntax and the array name — ...numbers.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore) // [0, 1, 2, 12] 
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`const a = [ 1, 2 ]
const b = [ 3, 4 ]
const c = [ ...a, ...b ]
console.log(c) // [1, 2, 3, 4]`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default SpreadOperator;
