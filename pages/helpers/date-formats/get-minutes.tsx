import { CopyBlock, vs2015 } from 'react-code-blocks';

const GetMinutes = () => {
  return (
    <div className="content-item">
      <h2>GetMinutes()</h2>
      <div className="desc">
        <p>
          The getMinutes() method returns the minutes of a date as a number
          (0-59):
        </p>

        <div className="code-block">
          <CopyBlock
            text={`const d = new Date();
console.log(d.getMinutes()); // 40
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

export default GetMinutes;
