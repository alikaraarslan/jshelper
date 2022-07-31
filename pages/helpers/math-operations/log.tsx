import { CopyBlock, vs2015 } from 'react-code-blocks';

const Log = () => {
  return (
    <div className="content-item">
      <h2>Log()</h2>
      <div className="desc">
        <p>Math.log() returns the natural logarithm of a number:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.log(2);
console.log(a); // 0.6931471805599453
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

export default Log;
