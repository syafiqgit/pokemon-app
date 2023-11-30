import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

function LayoutPage(props: Readonly<Props>) {
  const { children } = props;
  return (
    <div className="bg-blue-950">
      <div className="bg-color-primary w-[40rem] mx-auto h-screen overflow-auto">
        <Navbar />
        <div className="font-mono grow">{children}</div>
      </div>
    </div>
  );
}

export default LayoutPage;
