import { deleteDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import {
  convertTimestampToUSDateTime,
  getColorStatus,
} from "../../utils/functions";

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
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="rounded-2xl mb-3">
      <div
        className="w-full px-3 bg-gray placeholder:text-black/[.5] rounded-2xl outline-none pb-1 border-l-8"
        style={{ borderColor: getColorStatus(order.status) }}
      >
        <div className="relative mb-6">
          <div>
            <h3 className="text-lg md:text-2xl">{order.pizzaFlavor} Pizza</h3>
            <span className="text-md md:text-lg">Status: {order.status}</span>
            <p className="text-md md:text-lg">{order.observations}</p>
          </div>
          <div className="absolute top-1 right-1">
            <button title="Edit order" className="mr-2" onClick={() => {}}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              title="Delete order"
              onClick={() => handleDeleteOrder(order.id)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between text-xs sm:flex-row md:text-sm">
          <span>Created by: {order.orderName}</span>
          <span>
            Ordered at:{" "}
            {convertTimestampToUSDateTime(order.created_at?.toMillis())}
          </span>
        </div>
      </div>
    </div>
  );
};
