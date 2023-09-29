import React from "react";
import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";

const summary = {
  orders: 10,
  reviews: 8,
  wishlists: 14,
  cancels: 1,
  credits: 10,
};

const StatCard = () => {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Summary
        </Typography>
        <List>
          <ListItem>Orders: {summary.orders}</ListItem>
          <ListItem>Reviews: {summary.reviews}</ListItem>
          <ListItem>Wishlists: {summary.wishlists}</ListItem>
          <ListItem>Cancels: {summary.cancels}</ListItem>
          <ListItem>Credits: {summary.credits}</ListItem>
        </List>
      </CardBody>
    </Card>
  );
};

export default StatCard;
