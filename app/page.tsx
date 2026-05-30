import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jej</title>
      </Head>
      <h1>Welcome to Jej</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;