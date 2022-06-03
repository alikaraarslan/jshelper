import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Async = () => {
  return (
    <div className="content-item">
      <h2>Async</h2>
      <div className="desc">
        <p>
          When we append the keyword “async” to the function, this function
          returns the Promise by default on execution. Async keyword provides
          extra information to the user of the function:
        </p>
        <ul>
          <li>The function contains some Asynchronous Execution</li>
          <li>
            The returned value will be the Resolved Value for the Promise.
          </li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`async function f() {
  return 1;
}
f().then(alert); //1`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>
          The keyword async before a function makes the function return a
          promise:
        </p>
        <div className="code-block">
          <CopyBlock
            text={`async function myFunction() {
  return "Hello";
}`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
        <p>Is the same as:</p>
        <div className="code-block">
          <CopyBlock
            text={`function myFunction() {
  return Promise.resolve("Hello");
}`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Async;
