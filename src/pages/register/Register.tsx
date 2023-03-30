import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "/logo/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Loader } from "../../components/Loader";
import { Input } from "../../components/Input";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleToggleVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/");
        })
        .catch((error) => console.error(error.message))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div className=" md:flex md:h-screen">
        <div className="relative md:bg-red md:w-1/2">
          <img
            src={logo}
            alt="L'Originale logo"
            className="my-0 mx-auto w-[220px] md:w-[320px] md:centerItem lg:w-[420px]"
            loading="lazy"
          />
        </div>
        <div className="relative mx-auto">
          <div className="md:centerItem">
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <div className="w-[278px] mx-auto sm:w-[375px]">
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend className="font-bold">Email</legend>
                  <Input
                    type="email"
                    onChange={setEmail}
                    title="Enter your email here"
                    value={email}
                  />
                </fieldset>
                <fieldset className="mt-3 mb-1 relative">
                  <legend className="font-bold">Password</legend>
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    onChange={setPassword}
                    title="Enter your email here"
                    value={password}
                  />

                  <button
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={handleToggleVisibility}
                  >
                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </fieldset>

                <button
                  className="font-bold w-full h-10 bg-green rounded-2xl my-2"
                  title="Register your account"
                >
                  {isLoading ? <Loader /> : "Register"}
                </button>
              </form>
              <div className="w-[278px] mx-auto md:w-[320px] lg:w-[420px]">
                <div className="text-sm">
                  <p className="inline-block mr-1">Do you have an account?</p>
                  <Link
                    title="Login page"
                    to="/"
                    className="inline-block font-bold hover:underline hover:underline-offset-2"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
