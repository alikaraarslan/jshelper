import { CopyBlock, vs2015 } from 'react-code-blocks';

const Floor = () => {
  return (
    <div className="content-item">
      <h2>Floor()</h2>
      <div className="desc">
        <p>
          Math.floor(x) returns the value of x rounded down to its nearest
          integer:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.floor(2.4);
console.log(a); // 2
const b = Math.floor(-4.2);
console.log(b); // -5
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

export default Floor;
