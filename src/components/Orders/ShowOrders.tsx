import { Items } from "./Items";
import { OrdersProps } from "./OrderedItems";

interface ShowOrdersProps {
  data: OrdersProps[] | undefined;
  orderStatus: string;
}

export const ShowOrders = ({ data, orderStatus }: ShowOrdersProps) => {
  return (
    <>
      {data
        ?.filter((order) => order.status === orderStatus)
        .map((order) => {
          return <Items key={order.id} order={order} />;
        })}
    </>
  );
};
