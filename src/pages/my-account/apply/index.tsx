import MyAccountLayout from "@/layouts/MyAccountLayout/MyAccountLayout";
import React from "react";
import { Typography } from "@material-tailwind/react";

const Apply = () => {
  return (
    <MyAccountLayout>
      <Typography variant="h1" style={{ margin: "32px auto" }}>
        My Application
      </Typography>
    </MyAccountLayout>
  );
};

export default Apply;
