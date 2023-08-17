import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { API } from '@aws-amplify/api'
import config from '../aws-exports'
import { listTalkThemes } from "@/graphql/queries";
import { ListTalkThemesQuery } from "@/API";
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { useEffect, useState } from "react";

API.configure(config)

const DBLen = 50;

// List all items
const allTalkThemes = async () => {
  const rti = Math.floor(Math.random() * DBLen) + 1;
  const response  = await API.graphql({
    query: listTalkThemes,
    variables: {filter: {talkId: {eq: rti}}}
  }) as GraphQLResult<ListTalkThemesQuery>
  return response
};

const Home = () => {
  const [talkTheme, setTalkTheme] = useState('');
  useEffect(() => {
    changeTalkTheme()
  }, [])

  const changeTalkTheme = () => {
    allTalkThemes()
      .then((res) => setTalkTheme(res.data?.listTalkThemes?.items[0]?.talkTheme!))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Head>
        <title>話題 -トークテーマ- 提供アプリ</title>
      </Head>
      <main className={styles.main}>
        <h1 className="text-xl">話題 -トークテーマ- 提供アプリ</h1>
        <div className="mt-5 mb-8 first:mt-0 last:mb-0 relative overflow-hidden rounded-2xl">
          <div className="pt-2 bg-slate-800 shadow-lg group w-48">
            <div className="text-lg text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 text-center h-12">トークテーマ</div>
            <div className="children:!shadow-none children:bg-transparent text-center flex justify-center items-center h-24">{talkTheme}について</div>
          </div>
        </div>
        <button type="button" onClick={e => changeTalkTheme()} className="ml-3 text-base leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 xl:flex items-center hover:bg-sky-400/20">次の話題</button>
      </main>
    </>
  );
}

export default Home;
