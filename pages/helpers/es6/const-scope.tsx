/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const ConstScope = () => {
  return (
    <div className="content-item">
      <h2>Const Scope</h2>
      <div className="desc">
        <p>
          This declaration creates a constant whose scope can be either global
          or local to the block in which it is declared. Global constants do not
          become properties of the window object, unlike var variables.
        </p>
        <p>
          An initializer for a constant is required. You must specify its value
          in the same statement in which it's declared. (This makes sense, given
          that it can't be changed later.)
        </p>
        <p>
          The const declaration creates a read-only reference to a value. It
          does not mean the value it holds is immutable—just that the variable
          identifier cannot be reassigned. For instance, in the case where the
          content is an object, this means the object's contents (e.g., its
          properties) can be altered.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`// can be assigned only once
const a = 55
a = 44 // throws an error
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

export default ConstScope;
