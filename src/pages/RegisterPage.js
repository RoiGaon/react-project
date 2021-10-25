import * as React from "react";
import { useHistory } from "react-router-dom";
import { registerNewAccount } from "../helpers/fetcher";
import RegistrationForm from "../components/forms/RegistrationForm";
import { toast } from "react-toastify";
import { getMeData } from "../helpers/fetcher";

export default function RegisterPage({ set }) {
  const [isBiz, setIsBiz] = React.useState(false);
  const history = useHistory();

  function registerUser(data) {
    registerNewAccount(data, (data) => {
      if (data._id) {
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
        name={isBiz ? "Biz - Register" : "Register"}
        isBiz={isBiz}
        setIsBiz={setIsBiz}
      />
    </>
  );
}
