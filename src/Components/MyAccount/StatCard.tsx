import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const summary = {
  orders: 10,
  reviews: 8,
  wishlists: 14,
  offers: 2,
  cancels: 1,
  credits: 10
};

const StatCard = () => {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Summary
        </Typography>
        <Typography>Credits: {summary.credits}</Typography>
        <Typography>Orders: {summary.orders}</Typography>
        <Typography>Reviews: {summary.reviews}</Typography>
        <Typography>Wishlists: {summary.wishlists}</Typography>
        <Typography>Offers: {summary.offers}</Typography>
        <Typography>Cancels: {summary.cancels}</Typography>
      </CardBody>
    </Card>
  );
};

export default StatCard;
