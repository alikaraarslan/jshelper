/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Unshift = () => {
  return (
    <div className="content-item">
      <h2>Unshift()</h2>
      <div className="desc">
        <p>
          The unshift() method adds an element at the beginning of the array.
          For example,
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let dailyActivities = ['eat', 'sleep'];

//add an element at the start
dailyActivities.unshift('work'); 

console.log(dailyActivities); // ['work', 'eat', 'sleep']`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Unshift;
