"use client";

import React, { ReactElement } from "react";
import MyAccountLayout from "@/layouts/MyAccountLayout/MyAccountLayout";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Pic from "../../../images/face-2.jpg";
import Image from "next/image";
import { FaRegSave } from "react-icons/fa";

export const user = {
  displayName: "John Doe",
  email: "john@email.com",
  password: "akjsdhfdkjsahfakjs",
  phone: "+8801XXXXXXXXX",
  address: {
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Chak bazar",
    streetAddress: "Holding #09, Nazimmuddin road",
  },
};

const Profile = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  return (
    <MyAccountLayout>
      <Typography variant="h1" style={{ margin: "32px auto" }}>
        My profile
      </Typography>
      <Typography
        onClick={() => setIsDisabled(false)}
        className="text-end link text-primary"
      >
        Change information
      </Typography>

      <Card color="transparent" shadow={false}>
        <form className="mt-8 mb-2 grid grid-cols-2 gap-10">
          <div className="mb-2 w-80 flex flex-col gap-4">
            <div className="w-24 h-24 relative">
              <input
                type="file"
                className="cursor-pointer w-full h-full opacity-0 absolute bottom-0 left-0"
                title="Change profile picture"
                disabled={isDisabled}
              />
              <Image
                src={Pic}
                alt="avatar"
                width={96}
                height={96}
                className="rounded-full"
              ></Image>
            </div>
            {/* Ignore this crossOrigin error, it's fine  */}
            <Typography variant="small">Name:</Typography>
            <Input
              size="lg"
              label="Name"
              defaultValue={user.displayName}
              disabled={isDisabled}
            />
            <Typography variant="small">Email:</Typography>
            <Input
              size="lg"
              label="Email"
              defaultValue={user.email}
              disabled={isDisabled}
            />
            <Typography variant="small">Phone number:</Typography>
            <Input
              type="phone"
              size="lg"
              label="Phone"
              defaultValue={user.phone}
              disabled={isDisabled}
            />
            <Typography variant="small">Current password:</Typography>
            <Input
              type="password"
              size="lg"
              label="Password"
              defaultValue={user.password}
              disabled={isDisabled}
            />
          </div>
          <div className="mb-2 w-80 flex flex-col gap-4">
            <Typography variant="lead">Prsesnt Address -- </Typography>
            <Typography variant="small">Division:</Typography>
            <Input
              size="lg"
              label="Division"
              defaultValue={user.address.division}
              disabled={isDisabled}
            />
            <Typography variant="small">District:</Typography>
            <Input
              size="lg"
              label="District"
              defaultValue={user.address.district}
              disabled={isDisabled}
            />
            <Typography variant="small">Upazila:</Typography>
            <Input
              size="lg"
              label="Upazila"
              defaultValue={user.address.upazila}
              disabled={isDisabled}
            />
            <Typography variant="small">Street address:</Typography>
            <Input
              size="lg"
              label="Street address"
              defaultValue={user.address.streetAddress}
              disabled={isDisabled}
            />
            <Button
              className="w-max bg-primary flex items-center gap-3"
              disabled={isDisabled}
            >
              <FaRegSave />
              Save Changes
            </Button>
          </div>
        </form>
      </Card>
    </MyAccountLayout>
  );
};

export default Profile;
