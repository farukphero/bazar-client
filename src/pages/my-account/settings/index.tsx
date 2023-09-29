import MyAccountLayout from "@/layouts/MyAccountLayout/MyAccountLayout";
import React from "react";
import { Typography } from "@material-tailwind/react";

const Settings = () => {
  return (
    <MyAccountLayout>
      <Typography variant="h1" style={{ margin: "32px auto" }}>
        My Settings
      </Typography>
    </MyAccountLayout>
  );
};

export default Settings;
