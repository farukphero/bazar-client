import MyAccountLayout from "@/layouts/MyAccountLayout/MyAccountLayout";
import React from "react";
import { Card, Typography } from "@material-tailwind/react";

export const orders = [
  {
    id: "hsdoplsiaurnu9873h320mns",
    orderedDate: "2023-09-20",
    subtotal: 970,
    shippingCharge: 50,
    paymentMethod: "COD",
    status: "shipped",
    products: [
      {
        id: "1",
        name: "Pusti 5 liter soyabin oil",
        quantity: 1,
        price: 850,
        discount: 0,
      },
      {
        id: "2",
        name: "Pusti 2 kilogram atta",
        quantity: 1,
        price: 120,
        discount: 0,
      },
    ],
    customer: {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "+8801XXXXXXXXX",
    },
    shippingAddress: {
      division: "Dhaka",
      district: "Dhaka",
      upazila: "Chak bazar",
      streetAddress: "Holding #5, Swapno villa, Nazimmuddin road",
    },
  },
  {
    id: "asieowmchs2840oosdhuwio",
    orderedDate: "2023-09-17",
    subtotal: 970,
    shippingCharge: 50,
    paymentMethod: "COD",
    status: "shipped",
    products: [
      {
        id: "1",
        name: "Pusti 5 liter soyabin oil",
        quantity: 1,
        price: 850,
        discount: 0,
      },
      {
        id: "2",
        name: "Pusti 2 kilogram atta",
        quantity: 1,
        price: 120,
        discount: 0,
      },
    ],
    customer: {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "+8801XXXXXXXXX",
    },
    shippingAddress: {
      division: "Dhaka",
      district: "Dhaka",
      upazila: "Chak bazar",
      streetAddress: "Holding #5, Swapno villa, Nazimmuddin road",
    },
  },
  {
    id: "jhfal73990ajnd0oiw28345n",
    orderedDate: "2023-09-23",
    subtotal: 970,
    shippingCharge: 50,
    paymentMethod: "COD",
    status: "shipped",
    products: [
      {
        id: "1",
        name: "Pusti 5 liter soyabin oil",
        quantity: 1,
        price: 850,
        discount: 0,
      },
      {
        id: "2",
        name: "Pusti 2 kilogram atta",
        quantity: 1,
        price: 120,
        discount: 0,
      },
    ],
    customer: {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "+8801XXXXXXXXX",
    },
    shippingAddress: {
      division: "Dhaka",
      district: "Dhaka",
      upazila: "Chak bazar",
      streetAddress: "Holding #5, Swapno villa, Nazimmuddin road",
    },
  },
  {
    id: "aksj97dg63o01hs3bcka083n",
    orderedDate: "2023-09-16",
    subtotal: 970,
    shippingCharge: 50,
    paymentMethod: "COD",
    status: "shipped",
    products: [
      {
        id: "1",
        name: "Pusti 5 liter soyabin oil",
        quantity: 1,
        price: 850,
        discount: 0,
      },
      {
        id: "2",
        name: "Pusti 2 kilogram atta",
        quantity: 1,
        price: 120,
        discount: 0,
      },
    ],
    customer: {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "+8801XXXXXXXXX",
    },
    shippingAddress: {
      division: "Dhaka",
      district: "Dhaka",
      upazila: "Chak bazar",
      streetAddress: "Holding #5, Swapno villa, Nazimmuddin road",
    },
  },
];

export const TABLE_HEAD = ["Order", "Products", "Date", "Price", ""];

const Orders = () => {
  return (
    <MyAccountLayout>
      <Typography variant="h1" style={{margin: "32px auto"}}>My Orders</Typography>
      <Card className="h-full w-full overflow-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (
                { id, products, orderedDate, subtotal, shippingCharge },
                index
              ) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    {products.map(({ name }, i) => (
                      <div
                        key={i}
                        className="flex justify-start items-center gap-2"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </div>
                    ))}
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {orderedDate}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {subtotal + shippingCharge}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue"
                      className="font-medium"
                    >
                      Details
                    </Typography>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
    </MyAccountLayout>
  );
};

export default Orders;
