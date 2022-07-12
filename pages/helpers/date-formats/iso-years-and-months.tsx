import { CopyBlock, vs2015 } from 'react-code-blocks';

const IsoDatesYearAndMonth = () => {
  return (
    <div className="content-item">
      <h2>JS ISO Years and Months</h2>
      <div className="desc">
        <p>ISO dates can be written without specifying the day (YYYY-MM):</p>
        <div className="code-block">
          <CopyBlock
            text={`const d = new Date("2015-03");
console.log(d); // Sun Mar 01 2015 02:00:00 GMT+0200 (GMT+03:00)
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

export default IsoDatesYearAndMonth;
