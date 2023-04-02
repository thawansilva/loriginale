import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoXs from "/logo/logoXs.png";
import logoSm from "/logo/logoSm.png";
import logoMd from "/logo/logoMd.png";
import { auth } from "../../services/firebaseConfig";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

export const PasswordReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sendPasswordResetEmail(email).then(() => {
      alert("The password redefinition email was sended to you :)");
      navigate("/");
    });
  };

  return (
    <div className="centerItem">
      <section className="md:mb-28 md:-mt-40">
        <picture>
          <source srcSet={logoSm} media="(min-width:640px)" />
          <source srcSet={logoMd} media="(min-width:768px)" />
          <img
            src={logoXs}
            alt="L'Originale logo"
            className="my-0 mx-auto"
            loading="lazy"
          />
        </picture>
      </section>
      <section className="relative mx-auto">
        <div className="md:centerItem">
          <h1 className="text-3xl font-bold text-center my-3">
            Password Reset
          </h1>
          <div className="w-[278px] mx-auto sm:w-[375px]">
            <form onSubmit={handleSubmit} autoComplete="on">
              <fieldset className="mb-2">
                <legend className="font-bold">Email</legend>
                <Input
                  signPage
                  type="email"
                  title="Enter your email here"
                  value={email}
                  onChange={setEmail}
                />
              </fieldset>
              {error && (
                <span className="text-red font-bold text-sm">
                  {error.message}
                </span>
              )}
              <p>
                Or go to{" "}
                <Link
                  to="/"
                  title="Log in page"
                  className="inline-block font-bold hover:underline hover:underline-offset-2"
                >
                  Log in page
                </Link>
              </p>

              <Button
                title="Send reset password email"
                content="Send email"
                loading={sending}
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
