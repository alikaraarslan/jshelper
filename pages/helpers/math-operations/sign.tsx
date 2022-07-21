import { CopyBlock, vs2015 } from 'react-code-blocks';

const Sign = () => {
  return (
    <div className="content-item">
      <h2>Sign()</h2>
      <div className="desc">
        <p>Math.sign(x) returns if x is negative, null or positive:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.sign(2.4);
console.log(a); // 1
const b = Math.sign(-2.4);
console.log(b); // -1
const c = Math.sign(0);
console.log(c); // 0
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

export default Sign;
