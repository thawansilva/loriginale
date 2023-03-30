import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FormProps {
  register?: boolean;
  handleSubmit: () => void;
}

function Form({ handleSubmit, register }: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default Form;
