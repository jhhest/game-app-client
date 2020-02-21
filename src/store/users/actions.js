import axios from "axios";
//import instance from "../../axios-instance";
export const LOGIN_SUCCES = "LOGIN_SUCCES";
export const SIGNUP_SUCCES = "SIGNUP_SUCCES";

function loginSucces(resp) {
  const { token, username, email } = resp;
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
      .then(resp => dispatch(loginSucces(resp.data)))
      .catch(error => console.error("error", error));
  };
}

function signUpSucess(resp) {
  const { password, username, email } = resp;
  console.log(`
  2. signupSucces --
  password: ${password}
  username$: ${username}
  email: ${email}
  `);
  return {
    type: SIGNUP_SUCCES,
    payload: {
      token: password,
      username: username,
      email: email
    }
  };
}

export function userSignUp(username, email, password) {
  console.log(`
    1. userSignUp Sanity Check
    username:${username}
    email:${email}
    password:${password}
    `);

  return (dispatch, getState) => {
    axios
      .post("http://localhost:5000/user/signup", { username, email, password })
      .then((
        resp //console.log("User Signup data:", resp.data)
      ) => dispatch(signUpSucess(resp.data)))
      .catch(error => console.error("error", error));
  };
}
