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
            className="mr-3 inset-y-0"
            title={theme === "dark" ? "Light Theme" : " Dark Theme"}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 fill-current text-gray"
              >
                <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-6 h-6 "
              >
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              </svg>
            )}
          </button>
          <button onClick={handleSubmit} title="Log out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 fill-current"
            >
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};
