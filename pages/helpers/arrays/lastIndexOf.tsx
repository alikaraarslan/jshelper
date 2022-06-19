/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const LastIndexOf = () => {
  return (
    <div className="content-item">
      <h2>LastIndexOf()</h2>
      <div className="desc">
        <p>
          The lastIndexOf() method returns the index of the last occurrence of a
          specified element in the array.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let priceList = [10, 8, 2, 31, 10, 31, 65];
// finding the index of the last occurence of 31
let lastIndex = priceList.lastIndexOf(31);

console.log(lastIndex); 

// Output: 5`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default LastIndexOf;
