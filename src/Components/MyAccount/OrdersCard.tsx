import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { TABLE_HEAD, orders } from "@/pages/my-account/orders";

const OrdersCard = () => {
  return (
    <div>
      <Typography variant="h4" style={{ margin: "32px auto" }}>
        Recent orders
      </Typography>
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
    </div>
  );
};

export default OrdersCard;
