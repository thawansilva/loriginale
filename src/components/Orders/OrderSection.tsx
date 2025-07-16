import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebaseConfig";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";

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
        status: "Open",
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
    <section className="py-6 sm:w-[375px] mx-auto">
      <h2 className="mb-2 text-2xl font-bold text-center dark:text-gray md:text-3xl">
        Order Pizza
      </h2>
      <form
        className="p-4 text-center bg-red rounded-2xl"
        onSubmit={handleNewOrder}
      >
        <fieldset>
          <Input
            type="text"
            placeholder="Who ordered the pizza"
            value={orderName}
            onChange={setOrderName}
          />
        </fieldset>
        <fieldset className="mt-3">
          <Input
            type="text"
            placeholder="Kind of pizza"
            value={pizzaFlavor}
            onChange={setPizzaFlavor}
          />
        </fieldset>
        <fieldset className="mt-3">
          <textarea
            className="w-full h-40 pt-2 px-3 bg-gray placeholder:text-black/[.5] rounded-2xl outline-none mb-3"
            name="observation"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            placeholder="Any observation? (Opcional)"
          ></textarea>
        </fieldset>
        <Button
          loading={isLoading}
          title="Add Order"
          content="Add"
          width="200px"
        />
      </form>
    </section>
  );
};
