import { CopyBlock, vs2015 } from 'react-code-blocks';

const ForInLoops = () => {
  return (
    <div className="content-item">
      <h2>For...In Loops</h2>
      <div className="desc">
        <p>
          The for...in statement iterates a specified variable over all the
          enumerable properties of an object. For each distinct property,
          JavaScript executes the specified statements. A for...in statement
          looks as follows:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`for (variable in object)
  statement
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <h3>Example - 1</h3>
        <div className="code-block">
          <CopyBlock
            text={`function dump_props(obj, obj_name) {
  let result = '';
  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          For an object car with properties make and model, result would be:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`car.make = Ford
car.model = Mustang
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

export default ForInLoops;
