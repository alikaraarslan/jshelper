/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Pop = () => {
  return (
    <div className="content-item">
      <h2>Pop()</h2>
      <div className="desc">
        <p>
          The pop() method removes the last element from an array and returns
          that element.
        </p>
        <div className="code-block">
          <CopyBlock
            text={`let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
// remove the last element
let removedCity = cities.pop();

console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity);   // Paris
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

export default Pop;
