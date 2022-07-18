import { CopyBlock, vs2015 } from 'react-code-blocks';

const Ceil = () => {
  return (
    <div className="content-item">
      <h2>Ceil()</h2>
      <div className="desc">
        <p>
          Math.ceil(x) returns the value of x rounded up to its nearest integer:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.ceil(2.4);
console.log(a); // 3
const b = Math.ceil(-4.2);
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

export default Ceil;
