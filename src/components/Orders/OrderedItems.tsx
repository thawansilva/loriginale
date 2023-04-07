import { collection, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { FilterOrder } from "./FilterOrder";
import { Loader } from "../../styles/Loader";
import { useState } from "react";
import { ShowOrders } from "./ShowOrders";

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
  let allOrders: OrdersProps[] | undefined = value?.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as OrdersProps;
  });
  let dataIsFetched = allOrders && !loading;
  let noDataAvailable = allOrders?.length == 0 && !loading;

  return (
    <section className="py-6 md:w-3/5">
      <FilterOrder handleChangeStatus={handleChangeStatus} />
      <div className="p-4 bg-red rounded-2xl mt-3 mx-auto md:w-full">
        {dataIsFetched ? (
          <ShowOrders data={allOrders} orderStatus={orderStatus} />
        ) : (
          <Loader />
        )}
        {noDataAvailable && (
          <p className="text-center text-white">There is no order currently</p>
        )}
        {error && <p>{error?.message}</p>}
      </div>
    </section>
  );
};
