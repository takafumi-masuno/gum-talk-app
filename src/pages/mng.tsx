import { API, GraphQLQuery, GraphQLResult, graphqlOperation } from "@aws-amplify/api";
import config from '../aws-exports'
import { searchTalkThemes } from "@/graphql/queries";
import { CreateTalkThemeMutation, DeleteTalkThemeMutation, SearchTalkThemesQuery } from "@/API";
import { useEffect, useState } from "react";
import { createTalkTheme, deleteTalkTheme } from "@/graphql/mutations";
import { Tab } from "@headlessui/react";

API.configure(config)

type TalkThemeListType = ({
    __typename: "TalkTheme";
    id?: string | null | undefined;
    talkId: number;
    talkTheme?: string | null | undefined;
    genre?: string | null | undefined;
    createdAt: string;
    updatedAt: string;
} | null)[] | undefined

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// List all items
const allTalkThemes = async () => {
  const response  = await API.graphql({
    query: searchTalkThemes,
    variables: { sort: {field: 'talkId', direction: 'asc'}}
  }) as GraphQLResult<SearchTalkThemesQuery>
  return response
}

const Mng = () => {
    const [ talkId, setTalkId ] = useState<number>();
    const [ talkTheme, setTalkTheme ] = useState("");
    const [ id, setId ] = useState("");
    const [ talkThemeList, setTalkThemeList] = useState<TalkThemeListType>([]);
    const [ total, setTotal] = useState(0);
    const [ flg, setFlg] = useState(false);
    const [ errorMessage, setErrorMessage] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        allTalkThemes()
          .then((res) => {
            setTalkThemeList(res.data?.searchTalkThemes?.items);
            setTotal(res.data?.searchTalkThemes?.total!);
          })
          .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        setTalkId(total + 1)
    }, [total])

    useEffect(() => {
        setErrorMessage("");
        setFlg(false);
    }, [selectedIndex])

    const checkVal = () => {
        if (talkTheme === "") {
            setErrorMessage("トークテーマが入力されていません。");
            setFlg(true);
            return;
        }
        const check = talkThemeList?.filter(Item => Item?.talkTheme === talkTheme)!;
        if (check.length) {
            setErrorMessage("同じトークテーマが登録されています。");
            setFlg(true);
        } else {
            setErrorMessage("");
            setFlg(false);
        }
    }

    const regTalkTheme = async () => {
        if (talkTheme === "") {
            setErrorMessage("トークテーマが入力されていません。");
            setFlg(true);
            return;
        }
        const check = talkThemeList?.filter(Item => Item?.talkTheme === talkTheme)!;
        if (check.length) {
            setErrorMessage("同じトークテーマが登録されています。");
            setFlg(true);
            return;
        }

        setErrorMessage("");
        setFlg(false);

        await API.graphql<GraphQLQuery<CreateTalkThemeMutation>>(graphqlOperation(createTalkTheme, {input: {talkId: talkId, talkTheme: talkTheme}}))
            .then((res) => {
                setTalkTheme("")
            })
            .catch((error) => {
                setFlg(true);
                setErrorMessage("登録に失敗しました。")
                return;
            })

        setTimeout(() => {
            allTalkThemes()
              .then((res) => {
                setTalkThemeList(res.data?.searchTalkThemes?.items);
                setTotal(res.data?.searchTalkThemes?.total!);
            })
              .catch((err) => console.log(err))
        }, 2000)
    }

    const delTalkTheme = async () => {
        if (id === "") {
            setErrorMessage("IDが入力されていません。");
            setFlg(true);
            return;
        }

        setErrorMessage("");
        setFlg(false);

        await API.graphql<GraphQLQuery<DeleteTalkThemeMutation>>(graphqlOperation(deleteTalkTheme, {input: {id: id}}))
            .then((res) => {
                setId("")
            })
            .catch((error) => {
                setFlg(true);
                setErrorMessage("削除に失敗しました。")
                return;
            })

        setTimeout(() => {
            allTalkThemes()
              .then((res) => {
                setTalkThemeList(res.data?.searchTalkThemes?.items);
                setTotal(res.data?.searchTalkThemes?.total!);
            })
              .catch((err) => console.log(err))
        }, 2000)
    }

    return (
        <main className="w-full">
            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-[15rem]">
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-3 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }>
                        登録
                    </Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-3 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }>
                        削除
                    </Tab>
                </Tab.List>
                <Tab.Panels className="my-2">
                    <Tab.Panel>
                        <div>
                            <table className="border-separate">
                                <tbody>
                                    <tr className="my-1">
                                        <th className="w-20"><label>talkId</label></th>
                                        <td><label>{talkId}</label></td>
                                    </tr>
                                    <tr className="my-1">
                                        <th className="w-20"><label>トークテーマ</label></th>
                                        <td><input required type="text" value={talkTheme} onChange={(e) => setTalkTheme(e.target.value)} onBlur={() => checkVal()} /></td>
                                    </tr>
                                </tbody>
                            </table>
                            {flg && <div>{errorMessage}</div>}
                            <button type="button" onClick={() => regTalkTheme()} className="my-2 ml-3 text-base leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 xl:flex items-center hover:bg-sky-400/20">登録</button>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div>
                            <table className="border-separate">
                                <tbody>
                                    <tr className="my-1">
                                        <th className="w-20"><label>id</label></th>
                                        <td className="ml-2"><input required type="text" value={id} onChange={(e) => setId(e.target.value)} /></td>
                                    </tr>
                                </tbody>
                            </table>
                            {flg && <div>{errorMessage}</div>}
                            <button type="button" onClick={() => delTalkTheme()} className="my-2 ml-3 text-base leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 xl:flex items-center hover:bg-sky-400/20">削除</button>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className="mt-10 relative">
                <div className="overflow-x-auto flex -mx-4 sm:-mx-6 md:mx-0">
                    <div className="flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-80">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="sticky w-36 z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                                        <div className="py-2 pl-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">talkId</div>
                                    </th>
                                    <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                                        <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">トークテーマ</div>
                                    </th>
                                    <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                                        <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">ジャンル</div>
                                    </th>
                                    <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                                        <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">ID</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="align-baseline">
                                {talkThemeList!.map((item) => (
                                    <tr key={item?.talkId}>
                                        <td className="py-2 px-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400">{item?.talkId}</td>
                                        <td className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300">{item?.talkTheme}</td>
                                        <td className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300">{item?.genre}</td>
                                        <td className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300">{item?.id}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Mng;