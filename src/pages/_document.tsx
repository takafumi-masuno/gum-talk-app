import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./navbar";

export default function Document() {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content="gum-talk-app" />
      </Head>
      <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
