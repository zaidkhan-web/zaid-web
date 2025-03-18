import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return <main className="mt-7 md:mt-10 container">{children}</main>;
};

export default Main;
