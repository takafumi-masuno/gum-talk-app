import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { API } from '@aws-amplify/api'
import config from '../aws-exports'
import { getTalkTheme } from "@/graphql/queries";
import { GetTalkThemeQuery } from "@/API";
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { useEffect, useState } from "react";

API.configure(config)

const getTT = async () => {
  const id = Math.floor(Math.random() * 6) + 1;
  const response = await API.graphql({
     query: getTalkTheme,
     variables: {
        talkId: id
     },
  }) as GraphQLResult<GetTalkThemeQuery>
  return response
}

const Home = () => {

  const [talkTheme, setTalkTheme] = useState('');
  useEffect(() => {
    const talkThemeResponse = getTT();
    talkThemeResponse.then(({data}) => setTalkTheme(data!.getTalkTheme!.talkTheme))
  }, [])
  return (
    <>
      <Head>
        <title>Gum Talk App</title>
      </Head>
      <main className={styles.main}>
        <h1>Gum Talk App</h1>
        <div className="mt-5 mb-8 first:mt-0 last:mb-0 relative overflow-hidden rounded-2xl">
          <div className="pt-2 bg-slate-800 shadow-lg group w-48">
            <div className="text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 text-center h-12">トークテーマ</div>
            <div className="children:!shadow-none children:bg-transparent text-center align-middle h-24">{talkTheme}について</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
