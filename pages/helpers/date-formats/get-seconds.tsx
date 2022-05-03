import { CopyBlock, vs2015 } from 'react-code-blocks';

const GetSeconds = () => {
  return (
    <div className="content-item">
      <h2>GetSeconds()</h2>
      <div className="desc">
        <p>
          The getSeconds() method returns the seconds of a date as a number
          (0-59):
        </p>

        <div className="code-block">
          <CopyBlock
            text={`const d = new Date();
console.log(d.getSeconds()); // 47
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

export default GetSeconds;
