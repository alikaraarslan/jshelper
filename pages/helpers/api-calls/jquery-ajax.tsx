import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const JqueryAjax = () => {
  return (
    <div className="content-item">
      <h2>Jquery AJAX</h2>
      <div className="desc">
        <ul>
          <li>It performs asynchronous HTTP requests.</li>
          <li>Uses $.ajax() method to make the requests.</li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`$(document).ready(function(){
  $.ajax({
    url:
    "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    success: function(result){
    console.log(result);
    }
  })
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

export default JqueryAjax;
