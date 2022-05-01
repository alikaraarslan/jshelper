import { CopyBlock, vs2015 } from 'react-code-blocks';

const GetDay = () => {
  return (
    <div className="content-item">
      <h2>GetDay()</h2>
      <div className="desc">
        <p>The getDay() method returns the weekday as a number:</p>
        <div className="code-block">
          <CopyBlock
            text={`const d = new Date();
console.log(d.getDay()); // 0
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

export default GetDay;
