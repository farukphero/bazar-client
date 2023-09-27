import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import Pic from "../../images/face-2.jpg";
import Image from "next/image";
import Link from "next/link";

const user = {
  displayName: "John Doe",
  email: "john@email.com",
  phone: "+8801XXXXXXXXX",
  address: {
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Chak bazar",
    streetAddress: "Holding #09, Nazimmuddin road",
  },
};

const ProfileCard = () => {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Image src={Pic} alt="avatar" width={48} height={48} className="rounded-full"></Image>
        
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {user.displayName}
        </Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>
          Address: {user.address.streetAddress}, {user.address.upazila},{" "}
          {user.address.district}, {user.address.division}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={"/my-account/profile"} className="btn btn-primary text-white">Edit info</Link>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
