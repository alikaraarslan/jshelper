/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Shift = () => {
  return (
    <div className="content-item">
      <h2>Shift()</h2>
      <div className="desc">
        <p>
          If you need to remove the first element, you can use the shift()
          method. The shift() method removes the first element and also returns
          the removed element. For example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let dailyActivities = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities.shift();

console.log(dailyActivities); // ['eat', 'sleep']`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Shift;
