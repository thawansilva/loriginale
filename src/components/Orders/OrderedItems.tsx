import { collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebaseConfig";

import { useCollection } from "react-firebase-hooks/firestore";
import { FilterOrder } from "./FilterOrder";
import { Items } from "./Items";
import { Loader } from "../../styles/Loader";

export interface OrdersProps {
  id: string;
  orderName: string;
  pizzaFlavor: string;
  status: string;
  observations: string;
  created_at: Timestamp;
}

export const OrderedItems = () => {
  const [orderStatus, setOrderStatus] = useState<string>("Open");
  const [value, loading, error] = useCollection(collection(db, "orders"));
  const handleChangeStatus = (status: string): void => {
    setOrderStatus(status);
  };

  const listOfOrders: OrdersProps[] | undefined = value?.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as OrdersProps;
  });

  return (
    <section className="py-6 md:w-3/5">
      <FilterOrder handleChangeStatus={handleChangeStatus} />
      <div className="p-4 bg-red rounded-2xl mt-3 md:w-11/12 mx-auto lg:w-full">
        {listOfOrders && !loading ? (
          listOfOrders
            .filter((order) => order.status === orderStatus)
            .map((order) => {
              return <Items key={order.id} order={order} />;
            })
        ) : (
          <Loader />
        )}
        {listOfOrders?.length == 0 && !loading && (
          <p className="text-center text-white">There is no order currently</p>
        )}
        {error && <p>{error?.message}</p>}
      </div>
    </section>
  );
};
