/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const XmlHttpRequest = () => {
  return (
    <div className="content-item">
      <h2>XML HTTP Request</h2>
      <div className="desc">
        <p>
          All modern browsers have a built-in XMLHttpRequest object to request
          data from a server.
        </p>
        <ul>
          <li>Update a web page without reloading the page</li>
          <li>Request data from a server - after the page has loaded</li>
          <li>Receive data from a server - after the page has loaded</li>
          <li>Send data to a server - in the background</li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`var request = new XMLHttpRequest();
request.open('GET',
'https://jsonplaceholder.typicode.com/todos')
request.send();
request.onload = () => {
  console.log(JSON.parse(request.response));
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

export default XmlHttpRequest;
