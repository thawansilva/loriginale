import { useEffect, useState } from "react";
import { auth } from "../../services/firebaseConfig";
import logoXs from "/logo/homepage/Xs/logo.png";
import logoXsDark from "/logo/homepage/Xs/logo_dark.png";
import logoSm from "/logo/homepage/Sm/logo.png";
import logoSmDark from "/logo/homepage/Sm/logo_dark.png";
import logoMd from "/logo/homepage/Md/logo.png";
import logoMdDark from "/logo/homepage/Md/logo_dark.png";
import { useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import moon from "/icons/moon.svg";
import sun from "/icons/sun.svg";
import signOutImg from "/icons/signOut.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<string>(localStorage.theme);
  const [signOut, loading, error] = useSignOut(auth);

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
    signOut().then(() => navigate("/"));
  };

  return (
    <div className="shadow-lg shadow-black/[0.1] dark:shadow-white/[0.1] dark:text-gray">
      <nav className="flex items-center justify-between container mx-auto px-4">
        <picture>
          <source
            media="(min-width:640px)"
            srcSet={theme === "dark" ? logoSmDark : logoSm}
          />
          <source
            srcSet={theme === "dark" ? logoMdDark : logoMd}
            media="(min-width:768px)"
          />
          <img
            src={theme === "dark" ? logoXsDark : logoXs}
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
            {theme === "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>
          <button onClick={handleSubmit} title="Log out">
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};
