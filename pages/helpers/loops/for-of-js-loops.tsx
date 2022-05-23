import { CopyBlock, vs2015 } from 'react-code-blocks';

const ForOfLoops = () => {
  return (
    <div className="content-item">
      <h2>For...Of Loops</h2>
      <div className="desc">
        <p>
          The for...of statement creates a loop Iterating over iterable objects
          (including Array, Map, Set, arguments object and so on), invoking a
          custom iteration hook with statements to be executed for the value of
          each distinct property.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`for (variable of object)
  statement
`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          The following example shows the difference between a for...of loop and
          a for...in loop. While for...in iterates over property names, for...of
          iterates over property values:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
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

export default ForOfLoops;
