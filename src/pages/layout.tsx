import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className="flex flex-rows p-2 bg-red-500 text-white font-bold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      {children}
    </div>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
