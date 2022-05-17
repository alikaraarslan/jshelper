import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1 {
    font-size: 24px;
    color: #050505;
  }
  p {
    width: 80%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 18px;
  }
  .link {
    background: #050505;
    padding: 0 20px;
    border-radius: 12px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    height: 45px;
    line-height: 0;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Home: NextPage = () => {
  return (
    <IntroWrapper>
      <h1>Hello!</h1>
      <p>
        We are frontend developers. You can find anything on this site about
        Javascript.
      </p>
      <Link href="/helpers/loops/for-js-loops">
        <span className="link">Start Learning</span>
      </Link>
    </IntroWrapper>
  );
};

export default Home;
