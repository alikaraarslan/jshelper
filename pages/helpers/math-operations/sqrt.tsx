import { CopyBlock, vs2015 } from 'react-code-blocks';

const Sqrt = () => {
  return (
    <div className="content-item">
      <h2>Sqrt()</h2>
      <div className="desc">
        <p>Math.sqrt(x) returns the square root of x:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.sqrt(64);
console.log(a); // 8
const b = Math.sqrt(9);
console.log(b); // 3
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

export default Sqrt;
