import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";

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
        <Avatar src="../../images/face-2.jpg" alt="avatar" size="sm" />
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
        <Button>Edit info</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
