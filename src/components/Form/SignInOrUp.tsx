import React from "react";
import logoXs from "/logo/logoXs.png";
import logoSm from "/logo/logoSm.png";
import logoMd from "/logo/logoMd.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";

interface SignProps {
  handleSubmit: (email: string, password: string) => void;
  title: string;
  error:
    | {
        name: string;
        message: string;
        code: string;
      }
    | undefined;
  loading: boolean;
}

export const SignInOrUp = ({
  handleSubmit,
  title,
  error,
  loading,
}: SignProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit(email, password);
  };
  return (
    <div className="bg-gray">
      <div className="pt-20 my-auto md:flex md:h-screen md:pt-0">
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
            <h1 className="text-4xl font-bold text-center">{title}</h1>
            <div className="w-[278px] mx-auto sm:w-[375px]">
              <form onSubmit={onSubmit} autoComplete="on">
                <fieldset>
                  <legend className="font-bold">Email</legend>
                  <Input
                    signPage
                    type="email"
                    onChange={setEmail}
                    placeholder="Enter your email here"
                    value={email}
                  />
                </fieldset>
                <fieldset className="mt-3 mb-1 relative">
                  <legend className="font-bold">Password</legend>
                  <Input
                    signPage
                    type={isPasswordVisible ? "text" : "password"}
                    onChange={setPassword}
                    placeholder="Enter your password here"
                    value={password}
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
                </fieldset>
                {error && (
                  <span className="text-red font-bold text-sm">
                    {error?.message}
                  </span>
                )}
                <Button
                  title={`${title} your account`}
                  content={title}
                  loading={loading}
                />
              </form>

              {title == "Register" ? (
                <div className=" mx-auto ">
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
              ) : (
                <div className="mx-auto">
                  <div className="text-sm">
                    <p className="inline-block mr-1">
                      Doesn't have an account?
                    </p>
                    <Link
                      title="Create account"
                      to="/register"
                      className="inline-block font-bold hover:underline hover:underline-offset-2"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
