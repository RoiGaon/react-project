import * as React from "react";
import validateSignIn from "../../helpers/SignInHelper";
import { toast } from "react-toastify";

export default function SignInForm({ onSubmitSignIn = (f) => f }) {
  const emailInputRef = React.useRef("");
  const passwordInputRef = React.useRef("");
  return (
    <>
      <article className=" br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  ref={emailInputRef}
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
                  ref={passwordInputRef}
                />
              </div>
            </fieldset>
            <div className="tc">
              <input
                onClick={() => {
                  let errorOrData = validateSignIn(
                    emailInputRef.current.value,
                    passwordInputRef.current.value
                  );
                  if (typeof errorOrData === "string") {
                    toast(errorOrData);
                  } else {
                    onSubmitSignIn(errorOrData);
                  }
                }}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
          </div>
        </main>
      </article>
    </>
  );
}
