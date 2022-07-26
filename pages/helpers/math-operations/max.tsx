import { CopyBlock, vs2015 } from 'react-code-blocks';

const Max = () => {
  return (
    <div className="content-item">
      <h2>Max()</h2>
      <div className="desc">
        <p>Math.max() returns the highest value in a list of arguments.</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.max(0, 150, 30, 20, -8, -200);
console.log(a); // 150
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

export default Max;
