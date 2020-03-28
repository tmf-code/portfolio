import Head from 'next/head';
import { HeaderBar } from '../components/header-bar';

const Home = (): React.ReactElement => (
  <div className="container">
    <Head>
      <title>TMF Design Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <HeaderBar></HeaderBar>
    </main>
  </div>
);

export default Home;
