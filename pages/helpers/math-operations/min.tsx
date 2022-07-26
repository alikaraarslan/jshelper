import { CopyBlock, vs2015 } from 'react-code-blocks';

const Min = () => {
  return (
    <div className="content-item">
      <h2>Min()</h2>
      <div className="desc">
        <p>Math.min() returns the lowest value in a list of arguments:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.min(0, 150, 30, 20, -8, -200);
console.log(a); // -200
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

export default Min;
