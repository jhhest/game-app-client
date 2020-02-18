import axios from "axios";
import instance from "../../axios-instance";
export const LOGIN_SUCCES = "LOGIN_SUCCES";

function loginSucces(resp) {
  const { token, username, email } = resp
  console.log(`
  Sanity check
  token: ${token}
  username$: {username}
  email: ${email}
  `);
  return {
    type: LOGIN_SUCCES,
    payload: {
      token: token,
      username: username,
      email: email
    }
  };
}

export function userLogin(email, password) {
  console.log(`
    email:${email}
    password:${password}
    `);
  console.log("IM BEING CALLED ");
  return (dispatch, getState) => {
    axios
      .post("http://localhost:5000/user/login", { email, password })
      .then(resp =>
        dispatch(loginSucces(resp.data))
      )
      .catch(error => console.error("error", error));
  };
}
