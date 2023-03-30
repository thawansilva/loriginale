import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import logo from "/logo/logo_removedbg.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(localStorage.theme);

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const checkDarkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (checkDarkTheme) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setisLoading(true);
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error.message))
      .finally(() => setisLoading(false));
  };

  return (
    <div className="shadow-lg shadow-black/[0.1] dark:shadow-white/[0.1] dark:text-gray">
      <nav className="flex items-center justify-between container mx-auto px-4">
        <picture>
          <img
            className="w-[175px]"
            src={logo}
            alt="Logo with a piece of pizza and a text written L'Originale "
            loading="lazy"
            title="L'Originale Logo"
          />
        </picture>
        <div className="text-xl lg:text-2xl">
          <button
            onClick={handleToggleTheme}
            className="mr-3"
            title={theme === "dark" ? "Light Theme" : " Dark Theme"}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={handleSubmit} title="Log out">
            <FaArrowAltCircleRight />
          </button>
        </div>
      </nav>
    </div>
  );
};
