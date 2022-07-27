import { CopyBlock, vs2015 } from 'react-code-blocks';

const Random = () => {
  return (
    <div className="content-item">
      <h2>Random()</h2>
      <div className="desc">
        <p>Math.random() returns a random number between 0 and 1:</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.random();
console.log(a); // 0.2144625886568945
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

export default Random;
