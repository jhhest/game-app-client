import axios from "axios";
export const LOGIN_SUCCES = "LOGIN_SUCCES";

function loginSucces(token, username, email) {
  console.log("sanity test", token, username, email);
  
  return {
    type: LOGIN_SUCCES,
    payload: {
      token: token, 
      username: username, 
      email: email
    }
  }
}

export function userLogin(email, password) {
  console.log(`
    email:${email}
    password:${password}
    `);
    console.log("IM BEING CALLED ")
    return (dispatch, getState) => {
        axios.post('http://localhost:5000/user/login', { email, password })
        .then(resp => loginSucces(resp.data.token, resp.data.username, resp.data.email))
        .catch(error => console.error("error", error))
    }
}

