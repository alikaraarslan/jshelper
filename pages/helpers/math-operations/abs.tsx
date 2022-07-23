import { CopyBlock, vs2015 } from 'react-code-blocks';

const Abs = () => {
  return (
    <div className="content-item">
      <h2>Abs()</h2>
      <div className="desc">
        <p>Math.abs(x) returns the absolute (positive) value of x:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.abs(-2.4);
console.log(a); // 2.4
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

export default Abs;
