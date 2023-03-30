import { useEffect } from "react";
import { Navbar } from "../../components/Home/Navbar";
import { OrderedItems } from "../../components/Orders/OrderedItems";
import { OrderSection } from "../../components/Orders/OrderSection";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 ">
        <div className="md:flex md:justify-between gap-1">
          <OrderSection />
          <OrderedItems />
        </div>
      </main>
    </>
  );
};
