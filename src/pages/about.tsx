import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <main>
        <h1>本アプリについて</h1>
        <div>会話の話題を提供します。</div>
      </main>
    </div>
  );
};

export default About;
