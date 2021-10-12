import validateSimpleRegistration from "../../helpers/Registration";
import { toast } from "react-toastify";
const notify = (message) => toast(message);

function RegistrationForm(props) {
  const { onRegistration = (f) => f, name, isBiz } = props;
  return (
    <>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">{name}</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="tc">
              <input
                onClick={() => {
                  let validatioErrorOrData = validateSimpleRegistration(
                    "email-address",
                    "password",
                    "name",
                    isBiz
                  );
                  if (typeof validatioErrorOrData === "string") {
                    notify(validatioErrorOrData);
                  } else {
                    onRegistration(validatioErrorOrData);
                  }
                }}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value={name}
              />
            </div>
          </div>
        </main>
      </article>
    </>
  );
}

export default RegistrationForm;
