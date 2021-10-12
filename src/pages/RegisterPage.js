import { useHistory } from "react-router-dom";
import { registerNewAccount } from "../helpers/fetcher";
import RegistrationForm from "../components/forms/RegistrationForm";
import { toast } from "react-toastify";
import { getMeData } from "../helpers/fetcher";

function RegisterPage({ set }) {
  const history = useHistory();

  function registerUser(data) {
    registerNewAccount(data, (response) => {
      if (response._id) {
        toast("Account Created Successfully");
        localStorage.setItem("token", data.token);
        getMeData(data.token, (user) => {
          set(user);
        });
        history.replace("/all-cards");
      } else {
        toast("Eror Acount was not created");
      }
    });
  }

  return (
    <>
      <RegistrationForm
        onRegistration={registerUser}
        name="Register"
        isBiz={false}
      />
    </>
  );
}

export default RegisterPage;
