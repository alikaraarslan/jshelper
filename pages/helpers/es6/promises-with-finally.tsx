/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const PromisesWithFinally = () => {
  return (
    <div className="content-item">
      <h2>Promises With Finally</h2>
      <div className="desc">
        <p>
          The finally() method can be useful if you want to do some processing
          or cleanup once the promise is settled, regardless of its outcome.
        </p>
        <p>
          The finally() method is very similar to calling .then(onFinally,
          onFinally) however there are a couple of differences:
        </p>
        <ul>
          <li>
            When creating a function inline, you can pass it once, instead of
            being forced to either declare it twice, or create a variable for it
          </li>
          <li>
            A finally callback will not receive any argument, since there's no
            reliable means of determining if the promise was fulfilled or
            rejected. This use case is for precisely when you do not care about
            the rejection reason, or the fulfillment value, and so there's no
            need to provide it.
          </li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`let isLoading = true;

fetch(myRequest).then(function(response) {
    const contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.error(error); /* this line can also throw, e.g. when console = {} */ })
  .finally(function() { isLoading = false; });
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

export default PromisesWithFinally;
