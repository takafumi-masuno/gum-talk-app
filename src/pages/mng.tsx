import { API, GraphQLQuery, GraphQLResult, graphqlOperation } from "@aws-amplify/api";
import config from '../aws-exports'
import { listTalkThemes, searchTalkThemes } from "@/graphql/queries";
import { CreateTalkThemeMutation, ListTalkThemesQuery, SearchTalkThemesQuery, TalkTheme } from "@/API";
import { use, useEffect, useState } from "react";
import { createTalkTheme } from "@/graphql/mutations";

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
    const [ talkThemeList, setTalkThemeList] = useState<TalkThemeListType>([]);
    const [ total, setTotal] = useState(0);
    const [ flg, setFlg] = useState(false);
    const [ errorMessage, setErrorMessage] = useState("")

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

    return (
        <main>
            <div>
                <table className="border-separate">
                    <tbody>
                        <tr>
                            <th><label>talkId</label></th>
                            <td><label>{talkId}</label></td>
                        </tr>
                        <tr>
                            <th><label>トークテーマ</label></th>
                            <td><input required type="text" value={talkTheme} onChange={(e) => setTalkTheme(e.target.value)} onBlur={() => checkVal()} /></td>
                        </tr>
                    </tbody>
                </table>
                {flg && <div>{errorMessage}</div>}
                <button type="button" onClick={() => regTalkTheme()} className="ml-3 text-base leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 xl:flex items-center hover:bg-sky-400/20">登録</button>
            </div>
            <div className="pt-4">トークテーマリスト</div>
            <table className="border-collapse border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
                <thead className="bg-slate-50 dark:bg-slate-700 block">
                    <tr>
                        <th className="w-28 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">トークテーマId</th>
                        <th className="w-60 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">トークテーマ</th>
                        <th className="w-60 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">ジャンル</th>
                    </tr>
                </thead>
                <tbody className="block overflow-x-hidden overflow-y-scroll max-h-80">
                    {talkThemeList!.map((item) => (
                        <tr key={item?.talkId}>
                            <td className="w-28 border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{item?.talkId}</td>
                            <td className="w-60 border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{item?.talkTheme}</td>
                            <td className="w-40 border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{item?.genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default Mng;