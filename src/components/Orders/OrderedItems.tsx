import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebaseConfig";
import { Loader } from "../Loader";
import { FilterButtons } from "./FilterButtons";
import { Items } from "./Items";

export interface OrdersProps {
  id: string;
  orderName: string;
  pizzaFlavor: string;
  status: string;
  observations: string;
  created_at: Timestamp;
}

export const OrderedItems = () => {
  const [orders, setOrders] = useState<OrdersProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // RESOLVER PROBLEMA DE ATUALIZAÇÃO DOS DOCS
  useEffect(() => {
    setIsLoading(true);
    getDocs(collection(db, "orders")).then(({ docs }) => {
      const data = docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as OrdersProps;
      });
      setOrders(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="py-6">
      <FilterButtons />
      <div className="p-4 bg-red rounded-2xl mt-3 md:w-11/12 mx-auto lg:w-full">
        {orders && !isLoading ? (
          orders.map((order) => {
            return <Items key={order.id} order={order} />;
          })
        ) : (
          <Loader />
        )}
        {orders.length == 0 && !isLoading && (
          <p className="text-center text-white">There is no order currently</p>
        )}
      </div>
    </div>
  );
};
