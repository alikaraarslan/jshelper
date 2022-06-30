/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Null = () => {
  return (
    <div className="content-item">
      <h2>Null()</h2>
      <div className="desc">
        <p>
          In JavaScript, null is a special value that represents an empty or
          unknown value. For example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let number = null;`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          The code above suggests that the number variable is empty at the
          moment and may have a value later.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const a = null;
console.log(typeof a); // object`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Null;
