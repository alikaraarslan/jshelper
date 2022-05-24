import { CopyBlock, vs2015 } from 'react-code-blocks';

const MultilineStrings = () => {
  return (
    <div className="content-item">
      <h2>Multiline Strings</h2>
      <div className="desc">
        <p>
          ECMAScript 6 (ES6) introduces a new type of literal, namely template
          literals. They have many features, variable interpolation among
          others, but most importantly for this question, they can be multiline.
        </p>
        <p>A template literal is delimited by backticks:</p>
        <div className="code-block">
          <CopyBlock
            text={`console.log(\`
This is a
multiline string
\`)
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

export default MultilineStrings;
