import { CopyBlock, vs2015 } from 'react-code-blocks';

const GetFullYear = () => {
  return (
    <div className="content-item">
      <h2>getFullYear()</h2>
      <div className="desc">
        <p>The getFullYear() method returns the full year of a date:</p>
        <div className="code-block">
          <CopyBlock
            text={`const d = new Date();
console.log(d.getFullYear()); // 2022
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

export default GetFullYear;
