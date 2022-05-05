import { CopyBlock, vs2015 } from 'react-code-blocks';

const GetMonth = () => {
  return (
    <div className="content-item">
      <h2>GetMonth()</h2>
      <div className="desc">
        <p>
          The getMonth() method returns the month of a date as a number from 0
          to 11.
        </p>
        <p>To get the correct month, you must add 1:</p>
        <div className="code-block">
          <CopyBlock
            text={`const d = new Date();
console.log(d.getMonth() + 1); // 7
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>You can use an array to display the name of the month:</p>
        <div className="code-block">
          <CopyBlock
            text={`const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let month = months[d.getMonth()];
console.log(month); // July
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

export default GetMonth;
