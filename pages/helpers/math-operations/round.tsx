import { CopyBlock, vs2015 } from 'react-code-blocks';

const Round = () => {
  return (
    <div className="content-item">
      <h2>Round()</h2>
      <div className="desc">
        <p>Math.round(x) returns the nearest integer:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.round(1.5);
console.log(a); // 2
const b = Math.round(4.4);
console.log(b); // 4
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

export default Round;
