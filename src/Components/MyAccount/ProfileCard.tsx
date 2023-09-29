import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Pic from "../../images/face-2.jpg";
import Image from "next/image";
import Link from "next/link";
import { user } from "../../pages/my-account/profile";

const ProfileCard = () => {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Image
          src={Pic}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full"
        ></Image>

        <Typography variant="h5" color="blue-gray" className="mb-2">
          {user.displayName}
        </Typography>
        <Typography variant="h6">
          Email: <span className="font-normal">{user.email}</span>
        </Typography>
        <Typography variant="h6">
          Phone: <span className="font-normal">{user.phone}</span>
        </Typography>
        <Typography variant="h6">Present Address:</Typography>
        <Typography>
          {user.address.streetAddress}, {user.address.upazila},{" "}
          {user.address.district}, {user.address.division}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link
          href={"/my-account/profile"}
          className="btn btn-primary text-white"
        >
          Edit info
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
