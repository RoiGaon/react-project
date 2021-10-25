import { useHistory } from "react-router-dom";
import SignInForm from "../components/forms/SignInForm";
import { toast } from "react-toastify";
import { getMeData, signInUser } from "../helpers/fetcher";

export default function SignInPage({ set }) {
  const history = useHistory();

  function signIn(data) {
    signInUser(data, (response) => {
      if (response.token) {
        toast("Welcome to U");
        localStorage.setItem("token", response.token);
        getMeData(response.token, (data) => {
          set(data);
        });
        history.replace("/all-cards");
      } else {
        toast("Fail to log in");
      }
    });
  }

  return (
    <>
      <SignInForm onSubmitSignIn={signIn} />
    </>
  );
}
