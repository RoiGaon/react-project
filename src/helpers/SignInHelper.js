export default function validateSignIn(email, password) {
  let error = "";
  var data = {
    email,
    password,
  };

  if (!data.password || data.password.trim().length < 6) {
    error = `*Password must have 6 letters*`;
  }

  if (data.email) {
    var regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = regex.test(data.email);
    if (!res) {
      error += "Must enter valid email*";
    }
  } else {
    error += "Must enter valid email*";
  }

  return error || data;
}
