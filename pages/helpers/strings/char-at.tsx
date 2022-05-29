import { CopyBlock, vs2015 } from 'react-code-blocks';

const ChartAt = () => {
  return (
    <div className="content-item">
      <h2>ChartAt()</h2>
      <div className="desc">
        <div className="code-block">
          <CopyBlock
            text={`let text = "HELLO WORLD";
let letter = text.charAt(0);`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <div className="code-block">
          <CopyBlock
            text={`let text = "HELLO WORLD";
let letter = text.charAt(text.length-1);`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartAt;
