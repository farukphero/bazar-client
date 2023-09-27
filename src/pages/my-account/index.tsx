import MyAccountLayout from "@/layouts/MyAccountLayout/MyAccountLayout";
import React from "react";
import ProfileCard from "@/Components/MyAccount/ProfileCard";
import { Typography } from "@material-tailwind/react";
import StatCard from "@/Components/MyAccount/StatCard";
import OrdersCard from "@/Components/MyAccount/OrdersCard";

const MyAccount = () => {
  return (
    <MyAccountLayout>
      <Typography variant="h1" style={{ margin: "32px auto" }}>
        Dashboard
      </Typography>
      <div className="flex flex-row justify-start items-start gap-8">
        <ProfileCard />
        <StatCard />
      </div>
      <OrdersCard />
    </MyAccountLayout>
  );
};

export default MyAccount;
