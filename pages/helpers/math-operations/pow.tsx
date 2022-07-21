import { CopyBlock, vs2015 } from 'react-code-blocks';

const Pow = () => {
  return (
    <div className="content-item">
      <h2>Pow()</h2>
      <div className="desc">
        <p>Math.pow(x,y) returns the value of x to the power of y:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.pow(8,2);
console.log(a); // 64
const b = Math.pow(2,3);
console.log(b); // 8
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Pow;
