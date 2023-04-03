import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoXs from "/logo/logoXs.png";
import logoSm from "/logo/logoSm.png";
import logoMd from "/logo/logoMd.png";
import { auth } from "../../services/firebaseConfig";
import { Button } from "../../styles/Button";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Input } from "../../styles/Input";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleToggleVisibility = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="bg-gray">
      <div className="pt-20 md:flex md:h-screen md:pt-0">
        <section className="relative md:bg-gradient-to-b md:from-red md:to-red/[0.4] md:w-1/2">
          <picture>
            <source srcSet={logoSm} media="(min-width:640px)" />
            <source srcSet={logoMd} media="(min-width:768px)" />
            <img
              src={logoXs}
              alt="L'Originale logo"
              className="my-0 mx-auto md:centerItem"
              loading="lazy"
            />
          </picture>
        </section>
        <section className="relative mx-auto">
          <div className="md:centerItem">
            <h1 className="text-4xl font-bold text-center">Log in</h1>
            <div className="w-[278px] mx-auto sm:w-[375px]">
              <form onSubmit={handleSubmit} autoComplete="on">
                <fieldset className="mt-2">
                  <legend className="font-bold">Email</legend>
                  <Input
                    signPage
                    type="email"
                    placeholder="Enter your email here"
                    value={email}
                    onChange={setEmail}
                  />
                </fieldset>
                <fieldset className="mt-2 relative">
                  <legend className="font-bold">Password</legend>
                  <Input
                    signPage
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={setPassword}
                    placeholder="Enter your password here"
                  />
                  <div
                    className="absolute right-3 top-2 cursor-pointer"
                    onClick={handleToggleVisibility}
                    tabIndex={0}
                    title={isPasswordVisible ? "Hide password" : "See password"}
                  >
                    {isPasswordVisible ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa-solid fa-eye"></i>
                    )}
                  </div>
                  <span className="text-red font-bold text-sm">
                    {error?.message}
                  </span>
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
                <Button
                  title="Log in button"
                  content="Log in"
                  loading={loading}
                />
              </form>
              <div className="mx-auto">
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
        </section>
      </div>
    </div>
  );
};
