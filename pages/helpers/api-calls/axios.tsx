import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Axios = () => {
  return (
    <div className="content-item">
      <h2>Axios</h2>
      <div className="desc">
        <ul>
          <li>It is an open-source library for making HTTP requests.</li>
          <li>It works on both Browsers and Node js</li>
          <li>It can be included in an HTML file by using an external CDN</li>
          <li>It also returns promises like fetch API</li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`axios.get("https://jsonplaceholder.typicode
.com/todos")
.then(response =>{
  console.log(response.data)
})
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

export default Axios;
