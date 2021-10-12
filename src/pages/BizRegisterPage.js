import { useHistory } from "react-router-dom";
import { registerNewAccount } from "../helpers/fetcher";
import { toast } from "react-toastify";
import RegistrationForm from "../components/forms/RegistrationForm";
import { getMeData } from "../helpers/fetcher";

function BizRegisterPage({ set }) {
  const history = useHistory();

  function registerUser(data) {
    registerNewAccount(data, (data) => {
      if (data._id) {
        toast("Account Created Successfully");
        localStorage.setItem("token", data.token);
        getMeData(data.token, (user) => {
          set(user);
        });
        history.replace("/new-card");
      } else {
        toast("Eror Acount was not created");
      }
    });
  }
  return (
    <>
      <RegistrationForm
        onRegistration={registerUser}
        name="Biz - Register"
        isBiz={true}
      />
    </>
  );
}

export default BizRegisterPage;
