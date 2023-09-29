import MyAccountLayout from "@/layouts/MyAccountLayout/MyAccountLayout";
import React from "react";
import { Typography } from "@material-tailwind/react";

const Send = () => {
  return (
    <MyAccountLayout>
      <Typography variant="h1" style={{ margin: "32px auto" }}>
        My CV
      </Typography>
    </MyAccountLayout>
  );
};

export default Send;
