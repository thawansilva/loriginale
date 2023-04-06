import { auth } from "../../services/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { SignInOrUp } from "../../components/Form/SignInOrUp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <SignInOrUp
      handleSubmit={createUserWithEmailAndPassword}
      title="Register"
      error={error}
      loading={loading}
    />
  );
};
