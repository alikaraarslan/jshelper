import type { NextPage } from 'next';
import Link from 'next/link';
import IntroWrapper from '../styles';

const Home: NextPage = () => {
  return (
    <IntroWrapper>
      <h1>Hello!</h1>
      <p>
        We are software developers. You can find anything on this site about
        Javascript.
      </p>
      <Link href="/helpers/loops/for-js-loops">
        <span className="button-link">Start Learning</span>
      </Link>
    </IntroWrapper>
  );
};

export default Home;
