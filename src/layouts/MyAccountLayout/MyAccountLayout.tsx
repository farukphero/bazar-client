import React, { ReactNode } from "react";
import SideBar from "./SideBar";

type propsType = {
  children: ReactNode;
};

// My account is a protected layout, only include pages where user is necessary
const MyAccountLayout = ({ children }: propsType) => {
  const [user, setUser] = React.useState(true);

  if (!user) return <div>Loading...</div>;

  return (
    <section className="max-w-screen-2xl mx-auto py-10">
      <div className="flex flex-row gap-8 justify-start items-start">
        <div>
          <SideBar userName={"John Doe"} />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default MyAccountLayout;
