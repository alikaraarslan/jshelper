/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const SkippingItems = () => {
  return (
    <div className="content-item">
      <h2>Skipping Items</h2>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`const [, b] = [123, 'second', true];
// b => 'second'`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default SkippingItems;
