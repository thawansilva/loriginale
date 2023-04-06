import { auth } from "../../services/firebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { SignInOrUp } from "../../components/Form/SignInOrUp";

export const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  return (
    <SignInOrUp
      handleSubmit={signInWithEmailAndPassword}
      title="Log In"
      error={error}
      loading={loading}
    />
  );
};
