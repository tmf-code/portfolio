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

    <style jsx global>{`
      body {
        margin: 0;
        border: 0;
        padding: 0;
      }
      main {
        width: 100%;
      }
    `}</style>
  </div>
);

export default Home;
