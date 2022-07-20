import { CopyBlock, vs2015 } from 'react-code-blocks';

const Trunc = () => {
  return (
    <div className="content-item">
      <h2>trunc()</h2>
      <div className="desc">
        <p>Math.trunc(x) returns the integer part of x:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.trunc(2.4);
console.log(a); // 2
const b = Math.trunc(-4.2);
console.log(b); // -4
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

export default Trunc;
