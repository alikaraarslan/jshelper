/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const LetScope = () => {
  return (
    <div className="content-item">
      <h2>Let Scope</h2>
      <div className="desc">
        <p>
          let allows you to declare variables that are limited to the scope of a
          block statement, or expression on which it is used, unlike the var
          keyword, which declares a variable globally, or locally to an entire
          function regardless of block scope. The other difference between var
          and let is that the latter is initialized to a value only when a
          parser evaluates it (see below).
        </p>
        <p>
          Just like const the let does not create properties of the window
          object when declared globally (in the top-most scope).
        </p>
        <h3>Examples</h3>
        <p>
          Variables declared by let have their scope in the block for which they
          are declared, as well as in any contained sub-blocks. In this way, let
          works very much like var. The main difference is that the scope of a
          var variable is the entire enclosing function:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let a = 3
if (true) {
let a = 5
console.log(a) // prints 5
}
console.log(a) // prints 3
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

export default LetScope;
