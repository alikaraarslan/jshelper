import React from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';

const Swr = () => {
  return (
    <div className="content-item">
      <h2>useSWR</h2>
      <div className="desc">
        <p>
          SWR in this context stands for “stale-while-revalidate,” which is a
          term I imagine Next.js developers are already familiar with. The
          Next.js team built it to give developers more ways to fetch remote
          data when working with Next. It is basically a set of React Hooks that
          provide features like revalidation, mutation, caching, etc. out of the
          box.
        </p>
        <ul>
          <li>Update a web page without reloading the page</li>
          <li>Request data from a server - after the page has loaded</li>
          <li>Receive data from a server - after the page has loaded</li>
          <li>Send data to a server - in the background</li>
        </ul>
        <div className="code-block">
          <CopyBlock
            text={`import useSWR from 'swr'
function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
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

export default Swr;
