import React, { ReactElement } from "react";
import MyAccountLayout from "@/layouts/MyAccountLayout/MyAccountLayout";
import { Typography } from "@material-tailwind/react";

const Profile = () => {
  return (
    <MyAccountLayout>
      <Typography variant="h1" style={{ margin: "32px auto" }}>
        My profile
      </Typography>
    </MyAccountLayout>
  );
};

export default Profile;
