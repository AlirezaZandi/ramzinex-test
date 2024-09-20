import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="bg-neutral" dir="rtl">
      <div className="mx-auto bg-background min-h-screen p-4 flex flex-col">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
