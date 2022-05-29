/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const FirstValuesStoringRestTogether = () => {
  return (
    <div className="content-item">
      <h2>Assigning the first values, storing the rest together</h2>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`const [a, b, ...rest] = [123, 'second', true, false, 42];
// a => 123
// b => 'second'
// rest => [true, false, 42]
Swapping variables
let x = true;
let y = false;
[x, y] = [y, x];
// x => false
// y => true`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstValuesStoringRestTogether;
