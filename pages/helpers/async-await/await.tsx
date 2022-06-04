/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Await = () => {
  return (
    <div className="content-item">
      <h2>Await</h2>
      <div className="desc">
        <p>
          The keyword "await" makes JavaScript wait until that promise settles
          and returns its result
        </p>
        <ul>
          <li>The 'await' works only inside async functions</li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`async function f() {
  let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait until the promise resolves
  alert(result); // "done!"
}
f();
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

export default Await;
