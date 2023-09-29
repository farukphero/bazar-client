import React from "react";
import MyAccountLayout from "@/layouts/MyAccountLayout/MyAccountLayout";
import { Typography } from "@material-tailwind/react";

const Reviews = () => {
  return (
    <MyAccountLayout>
      <Typography variant="h1" style={{ margin: "32px auto" }}>
        My Reviews
      </Typography>
    </MyAccountLayout>
  );
};

export default Reviews;
