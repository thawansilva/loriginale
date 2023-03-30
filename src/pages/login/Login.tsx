import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo/logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { Loader } from "../../components/Loader";
import { Input } from "../../components/Input";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/home");
        })
        .catch((error) => console.error(error.message))
        .finally(() => setIsLoading(false));
    }
  };

  const handleToggleVisibility = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
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
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <div className="w-[278px] mx-auto sm:w-[375px]">
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend className="font-bold">Email</legend>
                  <Input
                    type="email"
                    title="Enter your email here"
                    value={email}
                    onChange={setEmail}
                  />
                </fieldset>
                <fieldset className="mt-3 mb-1 relative">
                  <legend className="font-bold">Password</legend>
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={setPassword}
                    title="Enter your password here"
                  />
                  <div
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={handleToggleVisibility}
                  >
                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </fieldset>
                <div className="text-sm">
                  <p className="inline-block mr-1">Forget your password?</p>
                  <Link
                    to="/passwordreset"
                    title="Reset you Password"
                    className="inline-block font-bold hover:underline hover:underline-offset-2"
                  >
                    Click Here
                  </Link>
                </div>

                <button
                  title="Login button"
                  className="font-bold w-full h-10 bg-green rounded-2xl my-2"
                >
                  {isLoading ? <Loader /> : "Login"}
                </button>
              </form>

              <div className="w-[278px] mx-auto md:w-[320px] lg:w-[420px]">
                <div className="text-sm">
                  <p className="inline-block mr-1">Doesn't have an account?</p>
                  <Link
                    title="Create account"
                    to="/register"
                    className="inline-block font-bold hover:underline hover:underline-offset-2"
                  >
                    Create account
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
