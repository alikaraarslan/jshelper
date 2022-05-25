/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const StringRepeat = () => {
  return (
    <div className="content-item">
      <h2>String Repeat</h2>
      <div className="desc">
        <p>
          The repeat() method constructs and returns a new string which contains
          the specified number of copies of the string on which it was called,
          concatenated together.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`console.log('ab'.repeat(3))
//prints "ababab"`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default StringRepeat;
