import { deleteDoc, doc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import {
  convertTimestampToUSDateTime,
  getColorStatus,
} from "../../utils/functions";
import { useState } from "react";
import { OrdersProps } from "./OrderedItems";

export interface ItemsProps {
  order: OrdersProps;
}

export const Items = ({ order }: ItemsProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newStatus, setNewStatus] = useState<string>(order.status);

  const handleDeleteOrder = (id: string) => {
    deleteDoc(doc(db, "orders", id))
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handleUpdateStatus = async () => {
    const orderRef = doc(db, "orders", order.id);
    if (newStatus) {
      await updateDoc(orderRef, { status: newStatus });
      setEditMode((prevEditMode) => !prevEditMode);
    }
  };

  return (
    <div className="rounded-2xl mb-3">
      <div
        className="w-full px-3 bg-gray placeholder:text-black/[.5] rounded-2xl outline-none pb-1 border-l-8"
        style={{ borderColor: getColorStatus(order.status) }}
      >
        <div className="relative mb-6">
          <div>
            <h3 className="text-base font-bold sm:text-2xl">
              {order.pizzaFlavor} Pizza
            </h3>
            {editMode ? (
              <fieldset>
                <label className="text-sm sm:text-lg inline-block">
                  Status:
                </label>
                <select
                  className="text-sm sm:text-lg inline-block ml-2 border border-black"
                  name="status"
                  defaultValue={order.status}
                  onChange={(e) => {
                    setNewStatus(e.target.value);
                  }}
                >
                  <option value="Open">Open</option>
                  <option value="Doing">Doing</option>
                  <option value="Finished">Finished</option>
                </select>
              </fieldset>
            ) : (
              <span className="text-md md:text-lg">Status: {order.status}</span>
            )}
            <p className="text-md md:text-lg">{order.observations}</p>
          </div>

          <div className="absolute top-1 right-1">
            {editMode ? (
              <>
                <button
                  className="text-sm font-bold w-full bg-green h-10 mt-2 rounded-2xl sm:text-base px-2"
                  onClick={() => handleUpdateStatus()}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <button
                  title="Edit order"
                  className="mr-2"
                  onClick={() => setEditMode((prevEditMode) => !prevEditMode)}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  title="Delete order"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between text-xs sm:flex-row md:text-sm">
          <span>Ordered by: {order.orderName}</span>
          <span>
            Ordered at:{" "}
            {convertTimestampToUSDateTime(order.created_at?.toMillis())}
          </span>
        </div>
      </div>
    </div>
  );
};
