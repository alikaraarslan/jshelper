import { CopyBlock, vs2015 } from 'react-code-blocks';

const IsoDates = () => {
  return (
    <div className="content-item">
      <h2>JS ISO Dates()</h2>
      <div className="desc">
        <p>
          ISO 8601 is the international standard for the representation of dates
          and times.
        </p>
        <p>
          The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date
          format:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const d = new Date("2015-03-25");
console.log(d); // Sun Mar 25 2015 00:00:00 GMT+0100 (CET)
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

export default IsoDates;
