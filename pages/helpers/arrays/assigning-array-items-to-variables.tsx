/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const AssigningArray = () => {
  return (
    <div className="content-item">
      <h2>Assigning array items to variables</h2>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`const [a, b, c] = [123, 'second', true];
// a => 123
// b => 'second'
// c => true
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

export default AssigningArray;
