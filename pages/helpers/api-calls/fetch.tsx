import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Fetch = () => {
  return (
    <div className="content-item">
      <h2>Fetch</h2>
      <div className="desc">
        <ul>
          <li>
            The Fetch API provides an interface for fetching resources
            (including across the network) in an asynchronous manner.
          </li>
          <li>It returns a Promise</li>
          <li>
            It is an object which contains a single value either a Response or
            an Error that occurred.
          </li>
          <li>
            .then() tells the program what to do once Promise is completed.
          </li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`fetch('https://jsonplaceholder.typicode.com/todos'
).then(response =>{
  return response.json();
}).then(data =>{
  console.log(data);
})`}
            language={'javascript'}
            showLineNumbers={false}
            theme={vs2015}
          />
        </div>
      </div>
    </div>
  );
};

export default Fetch;
