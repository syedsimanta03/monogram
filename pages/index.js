import Head from 'next/head'
import Header from './../components/global/Header';
import JsBox from './../components/home/JsBox';
import Logos from './../components/home/Logos';


export default function Home() {
  return (
    <>
      <Head>
        <title>Jamstack 101</title>
        <meta name="Jamstack 101" content="Learn jamstack today!" />
        <link rel="icon" href="/Jamstack.svg" />
      </Head>

      <main>
        <Header />
        <JsBox />
        <Logos />
      </main>
    </>
  );
}
