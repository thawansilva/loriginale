import { Items } from "./Items";
import { OrdersProps } from "./OrderedItems";

interface ShowOrdersProps {
  data: OrdersProps[] | undefined;
  orderStatus: string;
}

export const ShowOrders = ({ data, orderStatus }: ShowOrdersProps) => {
  let numberOfItems = data?.filter(
    (order) => order.status === orderStatus,
  ).length;
  console.log(numberOfItems);

  return (
    <>
      {numberOfItems == 0 ? (
        <h3 className="text-gray">No orders</h3>
      ) : (
        data
          ?.filter((order) => order.status === orderStatus)
          .map((order) => {
            return <Items key={order.id} order={order} />;
          })
      )}
    </>
  );
};
