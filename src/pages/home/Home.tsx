import { useEffect } from "react";
import { Navbar } from "../../components/Home/Navbar";
import { OrderedItems } from "../../components/Orders/OrderedItems";
import { OrderSection } from "../../components/Orders/OrderSection";
import { auth } from "../../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Home/Footer";

export const Home = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="dark:bg-blackDarkMode h-screen">
        <Navbar />
        <main className="container mx-auto px-6">
          <div className="md:flex md:justify-around md:gap-1">
            <OrderSection />
            <OrderedItems />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
