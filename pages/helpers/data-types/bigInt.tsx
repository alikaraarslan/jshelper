/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const BigInt = () => {
  return (
    <div className="content-item">
      <h2>BigInt()</h2>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2);
// Output:
// 900719925124740999n
// Uncaught TypeError: Cannot mix BigInt and other types`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default BigInt;
