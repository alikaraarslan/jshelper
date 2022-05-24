/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ExponentOperator = () => {
  return (
    <div className="content-item">
      <h2>Exponent Operator</h2>
      <div className="desc">
        <p>
          The exponentiation operator (**) returns the result of raising the
          first operand to the power of the second operand. It is equivalent to
          Math.pow, except it also accepts BigInts as operands.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const byte = 2 ** 8
// Same as: Math.pow(2, 8)
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01

console.log(2 ** 3 ** 2);
// expected output: 512

console.log((2 ** 3) ** 2);
// expected output: 64
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

export default ExponentOperator;
