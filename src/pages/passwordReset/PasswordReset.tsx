import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo/logo.png";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { Loader } from "../../components/Loader";
import { Input } from "../../components/Input";

export const PasswordReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Your password reset email has been sended");
          navigate("/");
        })
        .catch((error) => {
          return (
            error.code == "auth/invalid-email" &&
            setError("We couldn't find the account, please, use a valid email.")
          );
        })
        .finally(() => setIsLoading(false));
    } else {
      setError("You need to enter your email");
    }
  };

  if (error) {
    setTimeout(() => {
      setError("");
    }, 7000);
  }

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
          <h1 className="text-3xl font-bold text-center">Password Reset</h1>
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
              {error && <span className="text-red font-bold">{error}</span>}
              <button
                title="Login button"
                className="font-bold w-full h-10 bg-green rounded-2xl my-2"
              >
                {isLoading ? <Loader /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
