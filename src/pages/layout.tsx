import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
        <ul className="justify-center flex space-x-8">
          <li>
            <Link href="/" className="hover:text-sky-500 dark:hover:text-sky-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-sky-500 dark:hover:text-sky-400">About</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
