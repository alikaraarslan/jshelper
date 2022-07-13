import { CopyBlock, vs2015 } from 'react-code-blocks';

const OnlyYear = () => {
  return (
    <div className="content-item">
      <h2>JS ISO Only Year</h2>
      <div className="desc">
        <p>ISO dates can be written without month and day (YYYY):</p>
        <div className="code-block">
          <CopyBlock
            text={`const d = new Date("2015");
console.log(d); // Thu Jan 01 2015 02:00:00 GMT+0200 (GMT+03:00)
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          Time zones will vary the result above between December 31 2014 and
          January 01 2015.
        </p>
      </div>
    </div>
  );
};

export default OnlyYear;
