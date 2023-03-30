import { deleteDoc, doc, Timestamp } from "firebase/firestore";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { db } from "../../services/firebaseConfig";

interface OrdersProps {
  order: {
    id: string;
    orderName: string;
    pizzaFlavor: string;
    status: string;
    observations: string;
    created_at: Timestamp;
  };
}

export const Items = ({ order }: OrdersProps) => {
  const handleDeleteOrder = (id: string) => {
    deleteDoc(doc(db, "orders", id))
      .then(() => alert("Your doc was deleted"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="border-2 border-black rounded-2xl mb-3">
      <div className="w-full px-3 bg-gray placeholder:text-black/[.5] rounded-2xl outline-none pb-1  border-l-8 border-yellow">
        <div className="relative mb-6">
          <div>
            <h3 className="text-lg md:text-2xl">Flavor: {order.pizzaFlavor}</h3>
            <span className="text-md md:text-lg">Status: {order.status}</span>
            <p className="text-md md:text-lg">{order.observations}</p>
          </div>
          <div className="absolute top-1 right-1">
            <button className="mr-2" onClick={() => {}}>
              <FaEdit />
            </button>
            <button onClick={() => handleDeleteOrder(order.id)}>
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between text-xs sm:flex-row md:text-sm">
          <span>Created by: {order.orderName}</span>
          <span>Ordered at: </span>
        </div>
      </div>
    </div>
  );
};
