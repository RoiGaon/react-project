export default function validateSimpleRegistration(
  email,
  password,
  name,
  isBiz
) {
  let error = "";
  let data = {
    email,
    password,
    name,
    biz: isBiz,
  };

  if (!data.password || data.password.trim().length < 6) {
    error = `*Password must hace 6 letters*`;
  }

  if (data.email) {
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let res = regex.test(data.email);
    if (!res) {
      error += "*Must enter valid email*";
    }
  } else {
    error += "*Must enter valid email*";
  }
  if (!data.name || data.name.length < 2) {
    error += "*Name must have at leat two letters*";
  }

  return error || data;
}
