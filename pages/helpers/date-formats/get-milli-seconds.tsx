import { CopyBlock, vs2015 } from 'react-code-blocks';

const GetMilliseconds = () => {
  return (
    <div className="content-item">
      <h2>GetMilliseconds()</h2>
      <div className="desc">
        <p>
          The getMilliseconds() method returns the milliseconds of a date as a
          number (0-999):
        </p>

        <div className="code-block">
          <CopyBlock
            text={`const d = new Date();
console.log(d.getMilliseconds()); // 557
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

export default GetMilliseconds;
