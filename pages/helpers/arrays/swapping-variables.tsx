/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const SwappingVariables = () => {
  return (
    <div className="content-item">
      <h2>Swapping Variables</h2>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let x = true;
let y = false;
[x, y] = [y, x];
// x => false
// y => true
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

export default SwappingVariables;
