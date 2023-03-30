import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo/logo.png";

interface SignProps {
  register?: boolean;
  handleSubmit: () => void;
}

export const SignInOrUp = ({ register, handleSubmit }: SignProps) => {
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
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
          <h1 className="text-3xl font-bold text-center">
            {register ? "Register" : "Login"}
          </h1>
          <form
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <fieldset>
              <legend className="font-bold">Email</legend>
              <input
                className="w-full h-10 px-3 bg-inputGray/[.4] placeholder:text-black/[.5] rounded-2xl outline-none"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`Enter your email here`}
              />
            </fieldset>
            <fieldset className="mt-3 mb-1 relative">
              <legend className="font-bold">Password</legend>
              <input
                className="w-full h-10 px-3 bg-inputGray/[.4] placeholder:text-black/[.5] rounded-2xl outline-none"
                onChange={(e) => setPassword(e.target.value)}
                type={isPasswordVisible ? "text" : "password"}
                placeholder={`Enter your password here`}
              />

              <div
                className="absolute right-3 bottom-3"
                onClick={handleToggleVisibility}
              >
                {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </div>
            </fieldset>

            {!register && (
              <div className="text-sm">
                <p className="inline-block mr-1">Forget your password?</p>
                <Link
                  to="/"
                  className="inline-block font-bold hover:underline hover:underline-offset-2"
                >
                  Click Here
                </Link>
              </div>
            )}

            <button className="font-bold w-full h-10 bg-green rounded-2xl my-2">
              {register ? "Register" : "Login"}
            </button>
          </form>
          <div className="w-[278px] mx-auto md:w-[320px] lg:w-[420px]">
            <div className="text-sm">
              <p className="inline-block mr-1">
                {register
                  ? "Do you have an account?"
                  : "Doesn't have an account?"}
              </p>
              <Link
                to={register ? "/" : "/register"}
                className="inline-block font-bold hover:underline hover:underline-offset-2"
              >
                {register ? "Log in" : "Create account"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
