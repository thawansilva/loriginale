import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebaseConfig";
import { Input } from "../Input";

export const OrderSection = () => {
  const [orderName, setOrderName] = useState<string>("");
  const [pizzaFlavor, setPizzaFlavor] = useState<string>("");
  const [observations, setObservations] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNewOrder = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (orderName && pizzaFlavor) {
      addDoc(collection(db, "orders"), {
        orderName: orderName,
        pizzaFlavor: pizzaFlavor,
        observations: observations,
        status: "open",
        created_at: serverTimestamp(),
      })
        .then(() => {
          setOrderName("");
          setPizzaFlavor("");
          setObservations("");
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="py-6 sm:w-[400px] mx-auto">
      <h2 className="text-center text-2xl font-bold mb-2 dark:text-gray">
        Order Pizza
      </h2>
      <form
        className="p-4 bg-red rounded-2xl text-center"
        onSubmit={handleNewOrder}
      >
        <fieldset>
          <Input
            type="text"
            title="Who ordered the pizza"
            value={orderName}
            onChange={setOrderName}
          />
        </fieldset>
        <fieldset>
          <Input
            type="text"
            title="Kind of pizza"
            value={pizzaFlavor}
            onChange={setPizzaFlavor}
          />
        </fieldset>
        <fieldset>
          <textarea
            className="w-full h-40 pt-2 px-3 bg-gray placeholder:text-black/[.5] rounded-2xl outline-none mb-3"
            aria-multiline
            name="observation"
            onChange={(e) => setObservations(e.target.value)}
            placeholder="Any observation? (Opcional)"
          ></textarea>
        </fieldset>
        <button className="font-bold w-[200px] h-10  bg-green rounded-2xl">
          {isLoading ? (
            <div className="border-4 border-t-gray border-transparent rounded-[50%] w-6 h-6 animate-spin mx-auto my-0"></div>
          ) : (
            "Add"
          )}
        </button>
      </form>
    </div>
  );
};
