import { ReactNode } from "react";
import Navbar from "./navbar";

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div className="w-full h-screen flex justify-center overflow-auto bg-slate-500">
      <div className="w-full md:max-w-screen-md flex flex-col">
        <div className="grow overflow-auto">{children}</div>
        <Navbar/>
      </div>
    </div>
  );
}
