import { CopyBlock, vs2015 } from 'react-code-blocks';

const Sin = () => {
  return (
    <div className="content-item">
      <h2>Sin()</h2>
      <div className="desc">
        <p>Math.sin(x) returns the sin of x (given in radians):</p>
        <p>Angle in radians = (angle in degrees) * PI / 180.</p>
        <div className="code-block">
          <CopyBlock
            text={`const a = Math.sin(90 * Math.PI / 180);
console.log(a); // 1
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

export default Sin;
