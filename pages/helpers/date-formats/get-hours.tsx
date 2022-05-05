import { CopyBlock, vs2015 } from 'react-code-blocks';

const GetHours = () => {
  return (
    <div className="content-item">
      <h2>GetHours()</h2>
      <div className="desc">
        <p>
          The getHours() method returns the hours of a date as a number (0-23):
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const d = new Date();
console.log(d.getHours()); // 23
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

export default GetHours;
