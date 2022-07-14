import { CopyBlock, vs2015 } from 'react-code-blocks';

const DateTime = () => {
  return (
    <div className="content-item">
      <h2>JavaScript ISO Dates</h2>
      <div className="desc">
        <p>Separate date and time with a capital T.</p>
        <p>Indicate UTC time with a capital Z.</p>
        <div className="code-block">
          <CopyBlock
            text={`const d = new Date("2015-03-25T12:00:00Z");
console.log(d); // Wed Mar 25 2015 14:00:00 GMT+0200 (GMT+03:00)`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default DateTime;
